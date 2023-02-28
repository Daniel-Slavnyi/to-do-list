import { createSlice } from '@reduxjs/toolkit';

import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'tasks',
  whitelist: ['items', 'id'],
  storage,
};

const tsksSlice = createSlice({
  name: 'task',
  initialState: {
    items: [],
    id: 1,
  },
  reducers: {
    addNewTask(state, action) {
      state.items = [...state.items, action.payload];
    },
    makeId(state, action) {
      state.id = action.payload + state.id;
    },
    setDoneTask(state, action) {
      state.items = state.items.map(item => {
        if (item.id === Number(action.payload)) {
          return {
            ...item,
            isDone: !item.isDone,
          };
        }
        return item;
      });
    },
  },
});

const { actions } = tsksSlice;

export const { addNewTask, makeId, setDoneTask } = actions;

export const tasksReducer = persistReducer(persistConfig, tsksSlice.reducer);
