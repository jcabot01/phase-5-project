import { combineReducers } from "@reduxjs/toolkit";
import studentsReducer from "./features/studentsSlice";



const rootReducer = combineReducers({
  // students: studentsReducer,
});

export default rootReducer;