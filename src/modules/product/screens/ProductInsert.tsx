import Screen from "../../../shared/components/screen/Screen";
import { ProductRoutesEnum } from "../routes";

const ProductInsert = () => {
  return (
    <Screen
      listBreadcrumb={[
        { name: "HOME" },
        { name: "Produtos", navigateTo: ProductRoutesEnum.PRODUCT },
        { name: "Inserir Produto" }
      ]}
    >
      Insert
    </Screen>
  );
};

export default ProductInsert;
