import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    isAuthenticated: false,
    user: {},
  },
  reducers: {
    // 1) signup reducers
    // Reducer for clearing errors
  },
});

export default userSlice.reducer;
