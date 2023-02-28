import { createSlice } from '@reduxjs/toolkit';

const tsksSlice = createSlice({
  name: 'task',
  initialState: {
    items: [],
  },
  reducers: {
    addNewTask(state, action) {
      state.items = [action.payload, ...state.items];
    },
  },
});

const { actions, reducer } = tsksSlice;

export const { addNewTask } = actions;

export default reducer;
