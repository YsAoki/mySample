import { configureStore } from "@reduxjs/toolkit";
import selectedProductsReducer from "./selectedProductsSlice";
import viewModeReducer from "./viewModeSlice";

export type RootState = ReturnType<typeof store.getState>;

export const store = configureStore({
  reducer: {
    selectedProducts: selectedProductsReducer,
    viewMode: viewModeReducer,
  }
});