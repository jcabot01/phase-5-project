import { configureStore } from '@reduxjs/toolkit';
// import rootReducer from './reducer';
import studentsReducer from './features/studentsSlice'


const store = configureStore({
  reducer: {
    students: studentsReducer,
  }
})

export default store