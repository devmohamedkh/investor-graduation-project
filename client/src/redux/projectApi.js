import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getProjects = createAsyncThunk(
  "project/getProject",
  async (_, { rejectWithValue }) => {
    try {
      const project = await axios.get("http://localhost:5000/api/projects/");
      console.log("hi");
      console.log(project.data.data);
      console.log("hi");
      return project.data.data;
    } catch (error) {
      console.log(error);
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
      console.log(project.data.data);
      return project.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
