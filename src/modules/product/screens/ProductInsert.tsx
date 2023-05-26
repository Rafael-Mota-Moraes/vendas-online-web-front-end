import { useEffect } from "react";
import Screen from "../../../shared/components/screen/Screen";
import { useDataContext } from "../../../shared/hooks/useDataContext";
import { useRequests } from "../../../shared/hooks/useRequests";
import { MethodsEnum } from "../../../shared/enums/methods.enum";
import { URL_CATEGORY } from "../../../shared/constants/urls";
import Input from "../../../shared/components/inputs/input/Input";
import { LimitedContainer } from "../styles/productInsert.style";
import Button from "../../../shared/components/buttons/button/Button";
import { Select } from "antd";

const listBreadcrumb = [
  { name: "HOME" },
  { name: "Produtos", navigateTo: "/product" },
  { name: "Inserir Produto" }
];

const ProductInsert = () => {
  const { categories, setCategories } = useDataContext();
  const { request } = useRequests();

  useEffect(() => {
    if (categories.length === 0) {
      request(URL_CATEGORY, MethodsEnum.GET, setCategories);
    }
  }, []);

  const handleChange = (value: string) => {
    console.log(`Selected ${value}`);
  };

  return (
    <Screen listBreadcrumb={listBreadcrumb}>
      <LimitedContainer>
        <Input margin="0px 0px 16px 0" title="Nome" placeholder="Nome" />
        <Input
          margin="0px 0px 16px 0"
          title="Url imagem"
          placeholder="Url imagem"
        />
        <Input margin="0px 0px 16px 0" title="Preço" placeholder="Preço" />
        <Select
          defaultValue="Selecione a categoria"
          style={{ width: "100%" }}
          onChange={(value) => handleChange(value)}
          options={categories.map((category) => ({
            value: `${category.id}`,
            label: `${category.name}`
          }))}
        />
        <Button type="primary">Inserir Produto</Button>
      </LimitedContainer>
    </Screen>
  );
};

export default ProductInsert;
