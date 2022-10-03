import { createSlice } from "@reduxjs/toolkit";
import { setLocalStorage, getLocalStorage } from "../localstorage/localstorage";

const initialState = [];

const taskSlice = createSlice({
  name: "tasks",
  initialState: [getLocalStorage('task')]
    ? [JSON.parse(getLocalStorage('task'))]
    : initialState,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
      setLocalStorage('task' ,state)
    },
    deleteTask: (state, action) => {
      const taskFound = state.find((task) => task.id === action.payload);
      if (taskFound) {
        state.splice(state.indexOf(taskFound), 1);
      }
    },
    editTask: (state, action) => {
      const { id, title, description } = action.payload;
      const foundTask = state.find((task) => task.id === id);
      if (foundTask) {
        foundTask.title = title;
        foundTask.description = description;
      }
    },
  },
});

export const { addTask, deleteTask, editTask } = taskSlice.actions;

export default taskSlice.reducer;
