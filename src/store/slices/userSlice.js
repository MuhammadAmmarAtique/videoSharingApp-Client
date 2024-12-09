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
    dispatch(userSlice.actions.clearAllErrors());
  }
};

export default userSlice.reducer;
