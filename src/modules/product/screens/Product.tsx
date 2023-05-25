import { useEffect } from "react";
import { useDataContext } from "../../../shared/hooks/useDataContext";
import { useRequests } from "../../../shared/hooks/useRequests";
import { MethodsEnum } from "../../../shared/enums/methods.enum";
import { ProductType } from "../../../shared/types/ProductType";
import { URL_PRODUCT } from "../../../shared/constants/urls";
import { Table } from "../../../shared/components/table/Table";
import CategoryColumn from "../components/CategoryColumn";
import TooltipImage from "../components/TooltipImage";

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
