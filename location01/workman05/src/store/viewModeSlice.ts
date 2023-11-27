import { createSlice } from "@reduxjs/toolkit";


export const viewModeSlice = createSlice({
  name: "viewMode",
  initialState: {
    searchModalSwitch: false,
  },
  reducers: {
    openSearchModal: (state) => {
      state.searchModalSwitch = true;
    },
    closeSearchModal: (state) => {
      state.searchModalSwitch = false;
    },
  }
})

export const {openSearchModal, closeSearchModal} = viewModeSlice.actions;

export default viewModeSlice.reducer;