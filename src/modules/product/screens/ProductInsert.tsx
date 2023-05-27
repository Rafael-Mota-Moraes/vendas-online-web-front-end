import { useEffect, useState } from "react";
import Screen from "../../../shared/components/screen/Screen";
import { useDataContext } from "../../../shared/hooks/useDataContext";
import { useRequests } from "../../../shared/hooks/useRequests";
import { MethodsEnum } from "../../../shared/enums/methods.enum";
import { URL_CATEGORY, URL_PRODUCT } from "../../../shared/constants/urls";
import Input from "../../../shared/components/inputs/input/Input";
import { ProductInsertContainer } from "../styles/productInsert.style";
import Button from "../../../shared/components/buttons/button/Button";
import Select from "../../../shared/components/inputs/select/Select";
import { InsertProduct } from "../../../shared/dtos/InsertProduct.dto";
import { connectionApiPost } from "../../../shared/functions/connection/connectionApi";
import { LimitedContainer } from "../../../shared/components/styles/limited.style";
import {
  DisplayFlex,
  DisplayFlexJustifyRight
} from "../../../shared/components/styles/display.styled";
import { useNavigate } from "react-router-dom";
import { ProductRoutesEnum } from "../routes";
import { useGlobalContext } from "../../../shared/hooks/useGlobalContext";

const listBreadcrumb = [
  { name: "HOME" },
  { name: "Produtos", navigateTo: "/product" },
  { name: "Inserir Produto" }
];

const ProductInsert = () => {
  const { categories, setCategories } = useDataContext();
  const { request } = useRequests();
  const { setNotification } = useGlobalContext();
  const [product, setProduct] = useState<InsertProduct>({
    name: "",
    price: 0,
    image: ""
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (categories.length === 0) {
      request(URL_CATEGORY, MethodsEnum.GET, setCategories);
    }
  }, []);

  const handleInsertProduct = async () => {
    await connectionApiPost(URL_PRODUCT, product)
      .then(() => {
        setNotification("Produto inserido com sucesso!", "success");
        navigateToHome();
      })
      .catch((error: Error) => {
        setNotification(error.message, "error");
      });
  };

  const onChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    nameObject: string,
    isNumbebr?: boolean
  ) => {
    setProduct({
      ...product,
      [nameObject]: isNumbebr ? Number(event.target.value) : event.target.value
    });
  };

  const handleChange = (value: string) => {
    setProduct({
      ...product,
      categoryId: Number(value)
    });
    console.log(`Selected ${value}`);
  };

  const handleOnClickCancel = () => {
    navigate(ProductRoutesEnum.PRODUCT);
  };

  const navigateToHome = () => {
    navigate(ProductRoutesEnum.PRODUCT);
  };

  return (
    <Screen listBreadcrumb={listBreadcrumb}>
      <ProductInsertContainer>
        <LimitedContainer width={400}>
          <Input
            value={product.name}
            margin="0px 0px 16px 0"
            title="Nome"
            placeholder="Nome"
            onChange={(event) => onChange(event, "name")}
          />
          <Input
            value={product.image}
            margin="0px 0px 16px 0"
            title="Url imagem"
            placeholder="Url imagem"
            onChange={(event) => onChange(event, "image")}
          />
          <Input
            margin="0px 0px 16px 0"
            title="Preço"
            placeholder="Preço"
            value={product.price}
            onChange={(event) => onChange(event, "price", true)}
          />
          <Select
            defaultValue="Selecione a categoria"
            margin="0px 0px 32px 0"
            onChange={(value) => handleChange(value)}
            options={categories.map((category) => ({
              value: `${category.id}`,
              label: `${category.name}`
            }))}
          />
          <DisplayFlexJustifyRight>
            <LimitedContainer margin="0 16px" width={120}>
              <Button onClick={handleInsertProduct} type="primary">
                Inserir Produto
              </Button>
            </LimitedContainer>
            <LimitedContainer width={120}>
              <Button danger type="primary" onClick={handleOnClickCancel}>
                Cancelar
              </Button>
            </LimitedContainer>
          </DisplayFlexJustifyRight>
        </LimitedContainer>
      </ProductInsertContainer>
    </Screen>
  );
};

export default ProductInsert;
