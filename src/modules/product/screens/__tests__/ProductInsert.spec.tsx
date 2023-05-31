import { render } from "@testing-library/react";
import ProductInsert from "../ProductInsert";
import { ProductInsertTestIdEnum } from "../../enum/ProductInsertTestIdEnum";
import { mockProductInsert } from "../../__mocks__/productInsert.mock";

jest.mock("react-router-dom", () => ({
  useNavigate: () => jest.fn()
}));

jest.mock("../../../category/hooks/useCategory", () => ({
  useCategory: () => ({
    categories: []
  })
}));

jest.mock("../../hooks/useInsertProduct", () => ({
  useInsertProduct: () => ({
    product: mockProductInsert,
    loading: false,
    disableButton: false,
    onChangeInput: jest.fn(),
    handleChangeSelect: jest.fn(),
    handleInsertProduct: jest.fn()
  })
}));

describe("Test Button", () => {
  it("should render", () => {
    const { getByTestId } = render(<ProductInsert />);

    expect(
      getByTestId(ProductInsertTestIdEnum.PRODUCT_INSERT_BUTTON_CANCEL)
    ).toBeDefined();
    expect(
      getByTestId(ProductInsertTestIdEnum.PRODUCT_INSERT_BUTTON_INSERT)
    ).toBeDefined();
    expect(
      getByTestId(ProductInsertTestIdEnum.PRODUCT_INSERT_CONTAINER)
    ).toBeDefined();
    expect(
      getByTestId(ProductInsertTestIdEnum.PRODUCT_INSERT_INPUT_IMAGE)
    ).toBeDefined();
    expect(
      getByTestId(ProductInsertTestIdEnum.PRODUCT_INSERT_INPUT_NAME)
    ).toBeDefined();
    expect(
      getByTestId(ProductInsertTestIdEnum.PRODUCT_INSERT_INPUT_PRICE)
    ).toBeDefined();
    expect(
      getByTestId(ProductInsertTestIdEnum.PRODUCT_INSERT_BUTTON_CANCEL)
    ).toBeDefined();
  });
});
