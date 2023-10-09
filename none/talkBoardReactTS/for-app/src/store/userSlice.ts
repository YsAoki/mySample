import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    email: null,
    displayName: null,
    photoURL: null,
    uid: null,
  },
  reducers: {
    addEmail: (state, action) => {
      state.email = action.payload;
    },
    addDisplayName: (state, action) => {
      state.displayName = action.payload;
    },
    addPhotoUrl: (state, action) => {
      state.photoURL = action.payload;
    },
    addUid:(state, action) => {
      state.uid = action.payload;
    },
    logout: (state) => {
      state.email = null;
      state.displayName = null;
      state.photoURL = null;
      state.uid = null;
    },
  },
});

export const {addEmail, addDisplayName, addPhotoUrl, addUid, logout} = userSlice.actions;

export default userSlice.reducer;