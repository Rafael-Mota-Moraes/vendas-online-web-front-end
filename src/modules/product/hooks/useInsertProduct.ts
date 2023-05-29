import { useEffect, useState } from "react";
import { InsertProduct } from "../../../shared/dtos/InsertProduct.dto";
import { connectionApiPost } from "../../../shared/functions/connection/connectionApi";
import { URL_PRODUCT } from "../../../shared/constants/urls";
import { useNavigate } from "react-router-dom";
import { ProductRoutesEnum } from "../routes";
import { useGlobalReducer } from "../../../store/globalReducer/useGlobalReducer";

export const useInsertProduct = () => {
  const [loading, setLoading] = useState();
  const [disableButton, setDisableButton] = useState(true);
  const [product, setProduct] = useState<InsertProduct>({
    name: "",
    price: 0,
    image: ""
  });

  useEffect(() => {
    if (
      product.name &&
      product.categoryId &&
      product.price > 0 &&
      product.image
    ) {
      setDisableButton(false);
    } else {
      setDisableButton(true);
    }
  }, [product]);

  const { setNotification } = useGlobalReducer();

  const navigate = useNavigate();

  const onChangeInput = (
    event: React.ChangeEvent<HTMLInputElement>,
    nameObject: string,
    isNumbebr?: boolean
  ) => {
    setProduct({
      ...product,
      [nameObject]: isNumbebr ? Number(event.target.value) : event.target.value
    });
  };

  const handleChangeSelect = (value: string) => {
    setProduct({
      ...product,
      categoryId: Number(value)
    });
    console.log(`Selected ${value}`);
  };

  const handleInsertProduct = async () => {
    await connectionApiPost(URL_PRODUCT, product)
      .then(() => {
        setNotification("Produto inserido com sucesso!", "success");
        navigate(ProductRoutesEnum.PRODUCT);
        navigateToHome();
      })
      .catch((error: Error) => {
        setNotification(error.message, "error");
      });
  };

  const navigateToHome = () => {
    navigate(ProductRoutesEnum.PRODUCT);
  };

  return {
    product,
    loading,
    disableButton,
    onChangeInput,
    handleChangeSelect,
    handleInsertProduct
  };
};
