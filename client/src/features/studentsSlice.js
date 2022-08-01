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
  
    // salaryUpdated(state, action) {
    //   const student = state.entities.find((student) => student.id === action.payload.id);
    //   const job = state.entities.map((student) => student.jobs[0])
    //   cat.job.salary = action.payload.salary;
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
