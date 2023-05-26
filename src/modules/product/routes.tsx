import Product from ".";
import ProductInsert from "./screens/ProductInsert";

export enum ProductRoutesEnum {
  PRODUCT = "/product",
  PRODUCT_INSERT = "/product/insert"
}

export const productScreens = [
  {
    path: ProductRoutesEnum.PRODUCT,
    element: <Product />,
    errorElement: <div>Ocorreu algum erro</div>
  },
  {
    path: ProductRoutesEnum.PRODUCT_INSERT,
    element: <ProductInsert />,
    errorElement: <div>Ocorreu algum erro</div>
  }
];
