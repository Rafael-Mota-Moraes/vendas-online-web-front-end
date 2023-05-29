import { useNavigate } from "react-router-dom";
import Button from "../../../shared/components/buttons/button/Button";
import Input from "../../../shared/components/inputs/input/Input";
import Screen from "../../../shared/components/screen/Screen";
import {
  DisplayFlexJustifyCenter,
  DisplayFlexJustifyRight
} from "../../../shared/components/styles/display.styled";
import { LimitedContainer } from "../../../shared/components/styles/limited.style";
import { useInsertCategory } from "../hooks/useInsertCategory";
import { CategoryRoutesEnum } from "../routes";

const CategoryInsert = () => {
  const { name, loading, handleOnChangeName, insertCategory, disabledButton } =
    useInsertCategory();

  const navigate = useNavigate();

  const handleOnClickCancel = () => {
    navigate(CategoryRoutesEnum.CATEGORY);
  };

  return (
    <Screen
      listBreadcrumb={[
        { name: "HOME" },
        {
          name: "CATEGORIAS",
          navigateTo: CategoryRoutesEnum.CATEGORY
        },
        { name: "INSERIR CATEGORIA" }
      ]}
    >
      <DisplayFlexJustifyCenter>
        <LimitedContainer width={400}>
          <Input
            margin="0px 0px 16px 0"
            title="Nome"
            placeholder="Nome"
            onChange={handleOnChangeName}
            value={name}
          />
          <DisplayFlexJustifyRight>
            <LimitedContainer margin="0 16px" width={140}>
              <Button
                type="primary"
                disabled={disabledButton}
                loading={loading}
                onClick={insertCategory}
              >
                Inserir Categoria
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

export default CategoryInsert;
