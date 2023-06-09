import { fireEvent, render } from "@testing-library/react";
import ProductInsert from "../ProductInsert";
import { ProductInsertTestIdEnum } from "../../enum/ProductInsertTestIdEnum";
import { mockProductInsert } from "../../__mocks__/productInsert.mock";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  useNavigate: () => mockNavigate
}));

jest.mock("../../../category/hooks/useCategory", () => ({
  useCategory: () => ({
    categories: []
  })
}));

let value = "";
let type = "";
const mockButtonInsert = jest.fn();

jest.mock("../../hooks/useInsertProduct", () => ({
  useInsertProduct: () => ({
    product: mockProductInsert,
    loading: false,
    disableButton: false,
    onChangeInput: (event: React.ChangeEvent<HTMLInputElement>, x: string) => {
      value = event.target.value;
      type = x;
    },
    handleInsertProduct: mockButtonInsert,
    handleChangeSelect: jest.fn()
  })
}));

describe("Test Button", () => {
  it("should render", () => {
    const { getByTestId } = render(<ProductInsert />);

    expect(
      getByTestId(ProductInsertTestIdEnum.PRODUCT_BUTTON_CANCEL)
    ).toBeDefined();
    expect(
      getByTestId(ProductInsertTestIdEnum.PRODUCT_BUTTON_INSERT)
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
      getByTestId(ProductInsertTestIdEnum.PRODUCT_BUTTON_CANCEL)
    ).toBeDefined();
  });

  it("should call onChangeInput in change name", () => {
    const { getByTestId } = render(<ProductInsert />);

    const input = getByTestId(
      ProductInsertTestIdEnum.PRODUCT_INSERT_INPUT_NAME
    );

    fireEvent.change(input, { target: { value: "MOCK_NAME" } });

    expect(value).toEqual("MOCK_NAME");
    expect(type).toEqual("name");
  });

  it("should call onChangeInput in change price", () => {
    const { getByTestId } = render(<ProductInsert />);

    const input = getByTestId(
      ProductInsertTestIdEnum.PRODUCT_INSERT_INPUT_PRICE
    );

    fireEvent.change(input, { target: { value: mockProductInsert.price } });

    expect(value).toEqual("5.43");
    expect(type).toEqual("price");
  });

  it("should call onChangeInput in change image", () => {
    const { getByTestId } = render(<ProductInsert />);

    const input = getByTestId(
      ProductInsertTestIdEnum.PRODUCT_INSERT_INPUT_IMAGE
    );

    fireEvent.change(input, { target: { value: "image.png" } });

    expect(value).toEqual("image.png");
    expect(type).toEqual("image");
  });

  it("should call handleInsertProduct in click insert button", () => {
    const { getByTestId } = render(<ProductInsert />);

    const input = getByTestId(ProductInsertTestIdEnum.PRODUCT_BUTTON_INSERT);

    fireEvent.click(input);

    expect(mockButtonInsert).toBeCalled();
  });

  it("should call navigate in click cancel button", () => {
    const { getByTestId } = render(<ProductInsert />);

    const input = getByTestId(ProductInsertTestIdEnum.PRODUCT_BUTTON_CANCEL);

    fireEvent.click(input);

    expect(mockNavigate).toBeCalled();
  });
});
