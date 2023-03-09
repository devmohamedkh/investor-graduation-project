import { createSlice } from "@reduxjs/toolkit";
// import { getProjectById, getProjects } from "./projectApi";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const getProjects = createAsyncThunk(
  "project/getProject",
  async (_, { rejectWithValue }) => {
    try {
      const project = await axios.get("http://localhost:5000/api/projects/");
      return project.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getProjectById = createAsyncThunk(
  "project/getProjectById",
  async (projectId, { rejectWithValue }) => {
    try {
      const project = await axios.get(
        `http://localhost:5000/api/projects/${projectId}`
      );
      return project.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const getProjectsByName = createAsyncThunk(
  "project/getProjectsByName",
  async (name, { rejectWithValue }) => {
    try {
      const project = await axios.get(
        `http://localhost:5000/api/projects/name/${name}`
      );
      console.log(project.data);
      return project.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const projectSlice = createSlice({
  name: "project",
  initialState: {
    projects: null,
    project: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [getProjects.fulfilled]: (state, action) => {
      state.projects = action.payload;
      state.loading = false;
    },
    [getProjects.pending]: (state, action) => {
      state.loading = true;
    },
    [getProjects.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      toast.error(state.error.message);
    },
    [getProjectById.fulfilled]: (state, action) => {
      state.project = action.payload;
      state.loading = false;
    },
    [getProjectById.pending]: (state, action) => {
      state.loading = true;
    },
    [getProjectById.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      toast.error(state.error.message);
    },
    [getProjectsByName.fulfilled]: (state, action) => {
      state.projects = action.payload;
      state.loading = false;
    },
    [getProjectsByName.pending]: (state, action) => {
      state.loading = true;
    },
    [getProjectsByName.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {} = projectSlice.actions;
export default projectSlice.reducer;
