import { useEffect } from "react";
import { useDataContext } from "../../../shared/hooks/useDataContext";
import { useRequests } from "../../../shared/hooks/useRequests";
import { MethodsEnum } from "../../../shared/enums/methods.enum";
import { ProductType } from "../../../shared/types/ProductType";
import { URL_PRODUCT } from "../../../shared/constants/urls";
import { Table } from "../../../shared/components/table/Table";
import CategoryColumn from "../components/CategoryColumn";
import TooltipImage from "../components/TooltipImage";
import { convertNumberToMoney } from "../../../shared/functions/money";
import Screen from "../../../shared/components/screen/Screen";
import Button from "../../../shared/components/buttons/button/Button";
import { useNavigate } from "react-router-dom";
import { ProductRoutesEnum } from "../routes";

const columns = [
  {
    title: "Id",
    dataIndex: "id",
    render: (_: any, product: any) => <TooltipImage product={product} />
  },
  {
    title: "Nome",
    dataIndex: "name",
    key: "name"
  },
  {
    title: "Categoria",
    dataIndex: "category",
    key: "category",
    render: (_: any, product: any) => (
      <CategoryColumn category={product.category}></CategoryColumn>
    )
  },
  {
    title: "Preço",
    dataIndex: "price",
    key: "price",
    render: (_: any, product: any) => (
      <a>{convertNumberToMoney(product.price)}</a>
    )
  }
];

const Product = () => {
  const { products, setProducts } = useDataContext();
  const { request } = useRequests();
  const navigate = useNavigate();

  useEffect(() => {
    request<ProductType[]>(URL_PRODUCT, MethodsEnum.GET, setProducts);
  });

  const handleOnClickInsert = () => {
    navigate(ProductRoutesEnum.PRODUCT_INSERT);
  };
  return (
    <Screen listBreadcrumb={[{ name: "HOME" }, { name: "Produtos" }]}>
      <Button onClick={handleOnClickInsert}>Inserir</Button>
      <Table columns={columns} dataSource={products} />
    </Screen>
  );
};

export default Product;
