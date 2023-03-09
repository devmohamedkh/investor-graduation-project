import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

export const login = createAsyncThunk(
  "auth/login",
  async (user, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/signin",
        user
      );
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const register = createAsyncThunk(
  "auth/register",
  async (user, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/signup",
        user
      );
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: localStorage.getItem("token") != null,
    invistoer: localStorage.getItem("invistoer") || null,
    token: localStorage.getItem("token") || null,
    error: null,
    loading: false,
  },
  reducers: {
    logOut: (state) => {
      state.isAuthenticated = false;
      state.invistoer = null;
      state.token = null;
      state.error = null;
      localStorage.removeItem("token");
      localStorage.removeItem("invistoer");
    },
  },
  extraReducers: {
    [login.fulfilled]: (state, action) => {
      state.isAuthenticated = true;
      state.invistoer = action.payload.invistoer._id;
      state.token = action.payload.token;
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("invistoer", action.payload.invistoer._id);
      state.loading = false;
      state.error = null;
    },
    [login.pending]: (state, action) => {
      state.loading = true;
    },
    [login.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      toast.error(state.error.message);
    },
    [register.fulfilled]: (state, action) => {
      state.isAuthenticated = true;
      state.invistoer = action.payload.invistoer._id;
      state.token = action.payload.token;
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("invistoer", action.payload.invistoer._id);
      state.loading = false;
      state.error = null;
    },
    [register.pending]: (state, action) => {
      state.loading = true;
    },
    [register.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      toast.error(state.error.message);
    },
  },
});

export const { logOut } = authSlice.actions;
export default authSlice.reducer;
