import { createSlice } from "@reduxjs/toolkit";

export const keywordSlice = createSlice({
  name: "keyword",
  initialState: [],
  reducers: {
    addKeyword:(state, action) => {
      state = action.payload;
    }
  }
})