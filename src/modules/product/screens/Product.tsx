import { useEffect } from "react";
import { useDataContext } from "../../../shared/hooks/useDataContext";
import { useRequests } from "../../../shared/hooks/useRequests";
import { MethodsEnum } from "../../../shared/enums/methods.enum";
import { ProductType } from "../types/ProductType";
import { URL_PRODUCT } from "../../../shared/constants/urls";
import { Table } from "../../../shared/components/table/Table";

const Product = () => {
  const { products, setProducts } = useDataContext();
  const { request } = useRequests();

  useEffect(() => {
    request<ProductType[]>(URL_PRODUCT, MethodsEnum.GET, setProducts);
  });

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id"
    },
    {
      title: "Nome",
      dataIndex: "name",
      key: "name",
      render: (text: string) => <a>{text}</a>
    },
    {
      title: "Preço",
      dataIndex: "price",
      key: "price"
    }
  ];

  return (
    <div>
      <Table columns={columns} dataSource={products} />
    </div>
  );
};

export default Product;
