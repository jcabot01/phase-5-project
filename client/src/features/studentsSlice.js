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
    paydayUpdateBalance(state, action) {
      state.entities.map((student) => {
        if (student.id === action.payload.id) {
            return student.balance = action.payload.balance;
        } else {
            return state;
        };
    });
    },
    payRent(state, action) {
      state.entities.map((student) => {
        if (student.id === action.payload.id) {
            return student.balance = action.payload.balance;
        } else {
            return state;
        };
    });
    },
    collectRent(state, action) {
      state.entities.map((student) => {
        if (student.id === action.payload.id) {
            return student.balance = action.payload.balance;
        } else {
            return state;
        };
    });
    },
    deleteUser(state, action) {
      const index = state.entities.findIndex((student) => student.id === action.payload.id)
      state.entities.splice(index, 1);
    },
    updateBalanceAfterPrivilege(state, action) {
      state.entities.map((student) => {
        if (student.id === action.payload.id) {
            return student.balance = action.payload.balance;
        } else {
            return state;
        };
    });
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
    // showInvestmentAmount(state, action) {
    //   state.entities.map((student) => {
    //     if (student.id === action.payload.id) {
    //         return student.balance = action.payload.balance;
    //     } else {
    //         return state;
    //     };
    // });
 
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
    

export const {payRent, 
              collectRent, 
              deleteUser, 
              updateBalanceAfterPrivilege,
              updateInvestmentDialog,
              paydayUpdateBalance,
              jobSelectChangeSalary,
             } = studentsSlice.actions;

export default studentsSlice.reducer;
