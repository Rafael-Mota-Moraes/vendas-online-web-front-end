import Product from ".";

export enum ProductRoutesEnum {
  PRODUCT = "/product"
}

export const productScreens = [
  {
    path: ProductRoutesEnum.PRODUCT,
    element: <Product />,
    errorElement: <div>Ocorreu algum erro</div>
  }
];
