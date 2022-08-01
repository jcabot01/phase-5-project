import { configureStore } from '@reduxjs/toolkit';
// import rootReducer from './reducer';
import studentsReducer from './features/studentsSlice'


const store = configureStore({
  reducer: {
    students: studentsReducer,
  }
  // rootReducer,
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
})

export default store