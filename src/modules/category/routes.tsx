import Category from "./";
import CategoryInsert from "./screens/CategoryInsert";

export enum CategoryRoutesEnum {
  CATEGORY = "/category",
  CATEGORY_INSERT = "/category/insert"
}

export const categoryScreens = [
  {
    path: CategoryRoutesEnum.CATEGORY,
    element: <Category />,
    errorElement: <div>Ocorreu algum erro</div>
  },
  {
    path: CategoryRoutesEnum.CATEGORY_INSERT,
    element: <CategoryInsert />,
    errorElement: <div>Ocorreu algum erro</div>
  }
];
