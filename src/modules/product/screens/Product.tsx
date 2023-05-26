import { useEffect, useState } from "react";
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
import {
  BoxButtons,
  LimiteSizeButton,
  LimiteSizeInput
} from "../styles/product.style";
import { Input } from "antd";

const columns = [
  {
    title: "Id",
    dataIndex: "id",
    render: (_: any, product: any) => <TooltipImage product={product} />
  },
  {
    title: "Nome",
    dataIndex: "name",
    sorter: (a: any, b: any) => a.name.localeCompare(b.name),
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

const listBreadcrumb = [{ name: "HOME" }, { name: "Produtos" }];

const Product = () => {
  const { products, setProducts } = useDataContext();
  const [productsFiltered, setProductsFiltered] = useState<ProductType[]>([]);
  const { request } = useRequests();
  const navigate = useNavigate();
  const { Search } = Input;

  useEffect(() => {
    request<ProductType[]>(URL_PRODUCT, MethodsEnum.GET, setProducts);
  }, []);

  useEffect(() => {
    setProductsFiltered([...products]);
  }, [products]);

  const handleOnClickInsert = () => {
    navigate(ProductRoutesEnum.PRODUCT_INSERT);
  };

  const onSearch = (value: string) => {
    if (!value) {
      setProducts([...products]);
    } else {
      setProductsFiltered([
        ...productsFiltered?.filter((product) => {
          return product.name.includes(value);
        })
      ]);
    }
  };

  return (
    <Screen listBreadcrumb={listBreadcrumb}>
      <BoxButtons>
        <LimiteSizeInput>
          <Search
            placeholder="Buscar Produto"
            enterButton
            onSearch={(value) => onSearch(value)}
          />
        </LimiteSizeInput>
        <LimiteSizeButton>
          <Button type="primary" onClick={handleOnClickInsert}>
            Inserir
          </Button>
        </LimiteSizeButton>
      </BoxButtons>
      <Table columns={columns} dataSource={productsFiltered} />
    </Screen>
  );
};

export default Product;
