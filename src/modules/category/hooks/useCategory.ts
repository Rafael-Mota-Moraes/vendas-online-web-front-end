import { useEffect, useState } from "react";
import { useRequests } from "../../../shared/hooks/useRequests";
import { URL_CATEGORY } from "../../../shared/constants/urls";
import { MethodsEnum } from "../../../shared/enums/methods.enum";
import { useCategoryReducer } from "../../../store/reducers/categoryReducer/useCategoryReducer";

export const useCategory = () => {
  const { categories, setCategories } = useCategoryReducer();

  const { request } = useRequests();

  const [categoriesFiltered, setCategoriesFiltered] = useState(categories);

  useEffect(() => {
    if (!categories || categories.length === 0) {
      request(URL_CATEGORY, MethodsEnum.GET, setCategories);
    }
  }, []);

  useEffect(() => {
    setCategoriesFiltered([...categories]);
  }, [categories]);

  const handleOnChangeSearch = (value: string) => {
    if (!value) {
      setCategories([...categories]);
    } else {
      setCategories([
        ...categoriesFiltered?.filter((category) => {
          return category.name.toUpperCase().includes(value.toUpperCase());
        })
      ]);
    }
  };

  return { categories: categoriesFiltered, handleOnChangeSearch };
};
