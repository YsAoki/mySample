import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { db } from "../config/firebase";
import { collection, getDocs } from "firebase/firestore";

// データの型定義
type TalkData = {
  displayName: string;
  forDataTime: string;
  message: string;
  photoUrl: string;
  uid: string;
  updateFileUrl: string;
  viewTime: string;
};

export const fetchTalkData = createAsyncThunk<TalkData[]>(
  'talk/fetchTalkData',
  async () => {
    const querySnapshot = await getDocs(collection(db, 'talk'));
    const talkData = querySnapshot.docs.map(doc => doc.data() as TalkData); 
    return talkData;
  }
);

export const getFirestoreTalkSlice = createSlice({
  name: "getFirestoreTalk",
  initialState: [] as TalkData[],
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchTalkData.fulfilled, (state, action: PayloadAction<TalkData[]>) => {
      return action.payload;
    });
  },
});

export default getFirestoreTalkSlice.reducer;