import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// Action Creators

// async actions
export const fetchStudents = createAsyncThunk("students/fetchStudents", () => {
  // return a Promise containing the data we want
  return fetch("/students")
    .then((response) => response.json())
    .then((data) => data);
});

// Reducer

const studentsSlice = createSlice({
  name: "students",
  initialState: {
    entities: [], // array of cats
    status: "idle", // loading state
  },
  reducers: {
    // catAdded(state, action) {
    //   //using createSlice lets us mutate state!
    //   state.entities.push(action.payload);
    // },
  
    // catUpdated(state, action) {
    //   const cat = state.entities.find((cat) => cat.id === action.payload.id);
    //   cat.url = action.payload.url;
    // },
  },
  extraReducers: {
    // handle async action types
    [fetchStudents.pending](state) {
      state.status = "loading";
    },
    [fetchStudents.fulfilled](state, action) {
      state.entities = action.payload;
      state.status = "idle";
    },
  },
})
    

// export const { catAdded, catUpdated } = catsSlice.actions;

export default studentsSlice.reducer;
