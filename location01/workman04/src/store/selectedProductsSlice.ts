import { createSlice } from "@reduxjs/toolkit";

export const selectedProductsSlice = createSlice({
  name: "selectedProducts",
  initialState: {
    id: "",
  },
  reducers: {
    addSelectedProductsId: (state, action) => {
      state.id = action.payload;
    },
  }
})

export const {addSelectedProductsId} = selectedProductsSlice.actions;

export default selectedProductsSlice.reducer;