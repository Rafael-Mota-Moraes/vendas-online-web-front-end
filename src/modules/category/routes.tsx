import Category from "./";

export enum CategoryRoutesEnum {
  CATEGORY = "/category",
  CATEGORY_INSERT = "/category/insert"
}

export const categoryScreens = [
  {
    path: CategoryRoutesEnum.CATEGORY,
    element: <Category />,
    errorElement: <div>Ocorreu algum erro</div>
  }
];
