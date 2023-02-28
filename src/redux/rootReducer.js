import { combineReducers } from '@reduxjs/toolkit';
import tasksReducer from './tasks/tasks-slice';

export const rootReducer = combineReducers({
  tasks: tasksReducer,
});
