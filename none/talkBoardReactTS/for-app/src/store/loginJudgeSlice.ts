import { createSlice } from "@reduxjs/toolkit";

export const loginJudgeSlice = createSlice({
  name: "loginJudge",
  initialState: false,
  reducers: {
    loginNow: () => true,
    logoutNow: () => false,
  }
})

export const { loginNow, logoutNow } = loginJudgeSlice.actions;

export default loginJudgeSlice.reducer;