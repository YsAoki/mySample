import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type Todo = {
  time: string,
  todo: string,
  add: string,
  status: boolean,
}

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todoList: [] as Todo[]
  },
  reducers: {
    addTodoList:(state, action: PayloadAction<Todo>) => {
     state.todoList.push(action.payload)
    }
  }
})

export const {addTodoList} = todoSlice.actions;

export default todoSlice.reducer;