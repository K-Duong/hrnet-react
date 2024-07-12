import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  firstName: "",
  lastName: "",
  startDate: "",
  department: "",
  dateOfBirth: "",
  street: "",
  city: "",
  state:"",
  zipCode: 0
};

export const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducer: {
    
  }
})