import { useEffect, useState } from "react";
import Screen from "../../../shared/components/screen/Screen";
import { useDataContext } from "../../../shared/hooks/useDataContext";
import { useRequests } from "../../../shared/hooks/useRequests";
import { MethodsEnum } from "../../../shared/enums/methods.enum";
import { URL_CATEGORY, URL_PRODUCT } from "../../../shared/constants/urls";
import Input from "../../../shared/components/inputs/input/Input";
import { LimitedContainer } from "../styles/productInsert.style";
import Button from "../../../shared/components/buttons/button/Button";
import Select from "../../../shared/components/inputs/select/Select";
import { InsertProduct } from "../../../shared/dtos/InsertProduct.dto";
import { connectionApiPost } from "../../../shared/functions/connection/connectionApi";

const listBreadcrumb = [
  { name: "HOME" },
  { name: "Produtos", navigateTo: "/product" },
  { name: "Inserir Produto" }
];

const ProductInsert = () => {
  const { categories, setCategories } = useDataContext();
  const { request } = useRequests();
  const [product, setProduct] = useState<InsertProduct>({
    name: "",
    price: 0,
    image: ""
  });

  useEffect(() => {
    if (categories.length === 0) {
      request(URL_CATEGORY, MethodsEnum.GET, setCategories);
    }
  }, []);

  const handleInsertProduct = async () => {
    await connectionApiPost(URL_PRODUCT, product);
  };

  const onChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    nameObject: string
  ) => {
    setProduct({
      ...product,
      [nameObject]: event.target.value
    });
  };

  const onChangePrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProduct({
      ...product,
      price: Number(event.target.value)
    });
  };

  const handleChange = (value: string) => {
    setProduct({
      ...product,
      categoryId: Number(value)
    });
    console.log(`Selected ${value}`);
  };

  return (
    <Screen listBreadcrumb={listBreadcrumb}>
      <LimitedContainer>
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
          onChange={(event) => onChangePrice(event)}
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
        <Button onClick={handleInsertProduct} type="primary">
          Inserir Produto
        </Button>
      </LimitedContainer>
    </Screen>
  );
};

export default ProductInsert;
