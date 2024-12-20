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
    signupRequest(state, action) {
      state.loading = true;
      state.isAuthenticated = false;
      state.user = {};
    },
    signupSuccess(state, action) {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    signupFailed(state, action) {
      state.loading = false,
      state.isAuthenticated = false,
      state.user = {};
    },
    
    // 2) Login reducers
     LoginRequest(state, action) {
      state.loading = true;
      state.isAuthenticated = false;
      state.user = {};
    },
    LoginSuccess(state, action) {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    LoginFailed(state, action) {
      state.loading = false,
      state.isAuthenticated = false,
      state.user = {};
    },
    // Reducer for clearing errors
    clearAllErrors(state, action) {
    state.loading = false,
    state.isAuthenticated = state.isAuthenticated,
    state.user = state.user;
    },
  },
});

export const registerUser = (data) => async (dispatch) => {
  dispatch(userSlice.actions.signupRequest());
  try {
    const response = await axios.post(
      "http://localhost:7000/api/v1/users/register",
      data,
      {
        withCredentials: true,
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    dispatch(userSlice.actions.signupSuccess(response.data.data));
    toast.success(response.data.message);
    dispatch(userSlice.actions.clearAllErrors());
  } catch (error) {
    dispatch(userSlice.actions.signupFailed());

    //  Check if there are multiple Mongoose validation errors generated by errorHandler middleware from the backend
    if (error.response && error.response.data.errors.length > 0) {
      // Loop through each error and display it using toast
      error.response.data.errors.forEach((errMessage) => {
        toast.error(errMessage);
      });
    } else {
      toast.error(error.response.data.message);
      console.log("err:::::", error.response.data.message);
    }
    dispatch(userSlice.actions.clearAllErrors());
  }
};

export const loginUser = (data) => async (dispatch) => {
  dispatch(userSlice.actions.LoginRequest());
  try {
    const response = await axios.post(
      "http://localhost:7000/api/v1/users/login",
      data,
      {
        withCredentials: true,
        headers: { "Content-Type": "application/json" },
      }
    );
    dispatch(userSlice.actions.LoginSuccess(response.data.data));
    toast.success(response.data.message);
    dispatch(userSlice.actions.clearAllErrors());
  } catch (error) {
    dispatch(userSlice.actions.LoginFailed());
    toast.error(error.response.data.message);
    dispatch(userSlice.actions.clearAllErrors());
  }
};

export default userSlice.reducer;
