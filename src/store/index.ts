import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducers/productReducer";
import categoryReducer from "./reducers/categoryReducer";
import globalReducer from "./globalReducer";

const store = configureStore({
  reducer: {
    productReducer,
    categoryReducer,
    globalReducer
  }
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
