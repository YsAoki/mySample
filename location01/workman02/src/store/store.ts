import { configureStore } from "@reduxjs/toolkit";
import selectedProductsReducer from "./selectedProductsSlice";

export type RootState = ReturnType<typeof store.getState>;

export const store = configureStore({
  reducer: {
    selectedProducts: selectedProductsReducer,
  }
});