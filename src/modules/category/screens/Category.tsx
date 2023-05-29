import { ColumnsType } from "antd/es/table";
import Screen from "../../../shared/components/screen/Screen";
import { Table } from "../../../shared/components/table/Table";
import { useCategory } from "../hooks/useCategory";
import { CategoryType } from "../../../shared/types/CategoryType";
import { LimitedContainer } from "../../../shared/components/styles/limited.style";
import { Input } from "antd";
import Button from "../../../shared/components/buttons/button/Button";
import { useNavigate } from "react-router-dom";
import { CategoryRoutesEnum } from "../routes";
import { DisplayFlexJustifyBetween } from "../../../shared/components/styles/display.styled";

const { Search } = Input;

const columns: ColumnsType<CategoryType> = [
  {
    title: "Id",
    dataIndex: "id",
    render: (text) => <a>{text}</a>
  },
  {
    title: "Nome",
    dataIndex: "name",
    render: (text) => <a>{text}</a>
  },
  {
    title: "Prutos",
    dataIndex: "amountProducts",
    render: (text) => <a>{text}</a>
  }
];

const Category = () => {
  const { categories, handleOnChangeSearch } = useCategory();
  const navigate = useNavigate();

  const handleOnClickCategory = () => {
    navigate(CategoryRoutesEnum.CATEGORY_INSERT);
  };

  return (
    <Screen listBreadcrumb={[{ name: "HOME" }, { name: "CATEGORIAS" }]}>
      <DisplayFlexJustifyBetween>
        <LimitedContainer width={240}>
          <Search
            placeholder="Buscar Categoria"
            enterButton
            onSearch={(value) => handleOnChangeSearch(value)}
          />
        </LimitedContainer>
        <LimitedContainer width={120}>
          <Button type="primary" onClick={handleOnClickCategory}>
            Inserir
          </Button>
        </LimitedContainer>
      </DisplayFlexJustifyBetween>
      <Table columns={columns} dataSource={categories} />
    </Screen>
  );
};

export default Category;
