import { act, renderHook } from "@testing-library/react";
import { useInsertProduct } from "../useInsertProduct";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { URL_PRODUCT } from "../../../../shared/constants/urls";

const mockNavigate = jest.fn();
const mockSetNotification = jest.fn();
const mockAxios = new MockAdapter(axios);

mockAxios.onPost(URL_PRODUCT, {});

jest.mock("react-router-dom", () => ({
  useNavigate: () => mockNavigate
}));

jest.mock("../../../../store/globalReducer/useGlobalReducer", () => ({
  useGlobalReducer: () => ({
    setNotification: mockSetNotification
  })
}));

describe("Test use insert product", () => {
  it("should return initial values", () => {
    const { result } = renderHook(() => useInsertProduct());

    expect(result.current.loading).toEqual(false);
    expect(result.current.disableButton).toEqual(true);
    expect(result.current.product).toEqual({
      name: "",
      price: 0,
      image: ""
    });
  });

  it("should change select in handleChangeSelect", () => {
    const { result } = renderHook(() => useInsertProduct());

    act(() => {
      result.current.handleChangeSelect("10");
    });

    expect(result.current.product.categoryId).toEqual(10);
  });

  it("should change product in onChangeInput send name", () => {
    const TEST_MOCK = "TEST_MOCK";
    const { result } = renderHook(() => useInsertProduct());

    act(() => {
      result.current.onChangeInput(
        { target: { value: TEST_MOCK } } as any,
        "name"
      );
    });

    expect(result.current.product.name).toEqual(TEST_MOCK);
  });

  it("should change product in onChangeInput send price", () => {
    const TEST_MOCK = "345";
    const { result } = renderHook(() => useInsertProduct());

    act(() => {
      result.current.onChangeInput(
        { target: { value: TEST_MOCK } } as any,
        "price",
        true
      );
    });

    expect(result.current.product.price).toEqual(Number(TEST_MOCK));
  });

  it("should change disabledButton in insert data", () => {
    const { result } = renderHook(() => useInsertProduct());

    expect(result.current.disableButton).toEqual(true);

    act(() => {
      result.current.onChangeInput(
        { target: { value: "100" } } as any,
        "price",
        true
      );
    });

    expect(result.current.disableButton).toEqual(true);

    act(() => {
      result.current.onChangeInput({ target: { value: "ABC" } } as any, "name");
    });

    expect(result.current.disableButton).toEqual(true);

    act(() => {
      result.current.onChangeInput(
        { target: { value: "image.png" } } as any,
        "image"
      );
    });

    expect(result.current.disableButton).toEqual(true);

    act(() => {
      result.current.handleChangeSelect("123");
    });

    expect(result.current.disableButton).toEqual(false);

    act(() => {
      result.current.onChangeInput({ target: { value: "" } } as any, "image");
    });

    expect(result.current.disableButton).toEqual(true);
  });

  it("should call axios.post", () => {
    const spyAxios = jest.spyOn(axios, "post");

    const { result } = renderHook(() => useInsertProduct());

    act(() => {
      result.current.handleInsertProduct();
    });

    expect(spyAxios.mock.calls[0][1]).toEqual(result.current.product);

    expect(spyAxios.mock.calls.length).toEqual(1);
  });
});
