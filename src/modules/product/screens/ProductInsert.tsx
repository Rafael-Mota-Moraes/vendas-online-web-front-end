import Screen from "../../../shared/components/screen/Screen";
// import { ProductRoutesEnum } from "../routes";

const listBreadcrumb = [
  { name: "HOME" },
  { name: "Produtos", navigateTo: "/product" },
  { name: "Inserir Produto" }
];

const ProductInsert = () => {
  return <Screen listBreadcrumb={listBreadcrumb}>Insert</Screen>;
};

export default ProductInsert;
