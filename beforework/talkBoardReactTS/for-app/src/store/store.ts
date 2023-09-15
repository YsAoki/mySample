import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import loginJudgeReducer from "./loginJudgeSlice"
import getFirestoreTalkReducer from "./getFirestoreTalkSlice" 

export type RootState = ReturnType<typeof store.getState>;

export const store = configureStore({
  reducer: {
    user: userReducer,
    loginJudge: loginJudgeReducer,
    getFirestoreTalk: getFirestoreTalkReducer,
  }
})