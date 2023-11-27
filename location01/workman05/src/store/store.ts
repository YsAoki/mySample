import { configureStore } from "@reduxjs/toolkit";
import viewModeReducer from "./viewModeSlice";

export type RootState = ReturnType<typeof store.getState>;

export const store = configureStore({
  reducer: {
    viewMode: viewModeReducer,
  }
});