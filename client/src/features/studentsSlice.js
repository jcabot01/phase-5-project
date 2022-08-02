import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
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
    entities: [], // array of students
    status: "idle", // loading state
  },
  reducers: {
    jobSelectChangeSalary(state, action) {
      state.entities.map((student) => {
        if (student.id === action.payload.id) {
            const result = student.jobs.splice(0,0,{title: action.payload.title, salary: action.payload.salary, id: action.payload.jobId})
            return result
        } else {
            return state;
        };
    });
    },
    updateBalance(state, action) {
      state.entities.map((student) => {
        if (student.id === action.payload.id) {
            return student.balance = action.payload.balance;
        } else {
            return state;
        };
    });
    },
    updateWorkHabitScore(state, action) {
      state.entities.map((student) => {
        if (student.id === action.payload.studentId) {
            return student.work_habit_score = action.payload.score;
        } else {
            return state;
        };
    });
    },
    deleteUser(state, action) {
      const index = state.entities.findIndex((student) => student.id === action.payload.id)
      state.entities.splice(index, 1);
    },
    updateInvestmentDialog(state, action) {
      state.entities.map((student) => {
        if (student.id === action.payload.id) {
            return student.privileges.push({amount: action.payload.amount, created_at: action.payload.created_at, event: action.payload.event, id: uuid()})
        } else {
            return state;
        };
    });
    },
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
    

export const {deleteUser, 
              updateInvestmentDialog,
              updateBalance,
              jobSelectChangeSalary,
              updateWorkHabitScore,
              } = studentsSlice.actions;

export default studentsSlice.reducer;
