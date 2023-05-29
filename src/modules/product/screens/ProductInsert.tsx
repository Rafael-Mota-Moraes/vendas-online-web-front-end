import Screen from "../../../shared/components/screen/Screen";
import Input from "../../../shared/components/inputs/input/Input";
import Button from "../../../shared/components/buttons/button/Button";
import Select from "../../../shared/components/inputs/select/Select";
import { LimitedContainer } from "../../../shared/components/styles/limited.style";
import {
  DisplayFlexJustifyCenter,
  DisplayFlexJustifyRight
} from "../../../shared/components/styles/display.styled";
import { useNavigate } from "react-router-dom";
import { ProductRoutesEnum } from "../routes";
import InputMoney from "../../../shared/components/inputs/inputMoney/InputMoney";
import { useInsertProduct } from "../hooks/useInsertProduct";
import { useCategory } from "../../category/hooks/useCategory";
import { useState } from "react";

const listBreadcrumb = [
  { name: "HOME" },
  { name: "Produtos", navigateTo: "/product" },
  { name: "Inserir Produto" }
];

const ProductInsert = () => {
  const { categories } = useCategory();

  const {
    loading,
    product,
    disableButton,
    onChangeInput,
    handleChangeSelect,
    handleInsertProduct
  } = useInsertProduct();
  const navigate = useNavigate();

  const handleOnClickCancel = () => {
    navigate(ProductRoutesEnum.PRODUCT);
  };

  return (
    <Screen listBreadcrumb={listBreadcrumb}>
      <DisplayFlexJustifyCenter>
        <LimitedContainer width={400}>
          <Input
            value={product.name}
            margin="0px 0px 16px 0"
            title="Nome"
            placeholder="Nome"
            onChange={(event) => onChangeInput(event, "name")}
          />
          <Input
            value={product.image}
            margin="0px 0px 16px 0"
            title="Url imagem"
            placeholder="Url imagem"
            onChange={(event) => onChangeInput(event, "image")}
          />
          <InputMoney
            margin="0px 0px 16px 0"
            title="Preço"
            placeholder="Preço"
            value={product.price}
            onChange={(event) => onChangeInput(event, "price", true)}
          />
          <Select
            defaultValue="Selecione a categoria"
            margin="0px 0px 32px 0"
            onChange={(value) => handleChangeSelect(value)}
            options={categories.map((category) => ({
              value: `${category.id}`,
              label: `${category.name}`
            }))}
          />
          <DisplayFlexJustifyRight>
            <LimitedContainer margin="0 16px" width={120}>
              <Button
                loading={loading}
                disabled={disableButton}
                onClick={handleInsertProduct}
                type="primary"
              >
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
      </DisplayFlexJustifyCenter>
    </Screen>
  );
};

export default ProductInsert;
