import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const getInvistor = createAsyncThunk(
  "invistor/getInvistor",
  async (payload, { rejectWithValue }) => {
    try {
      const invistor = await axios.get(`/api/invistors/${payload}`);
      return invistor.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const invistorSlice = createSlice({
  name: "invistor",
  initialState: {
    invistor: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [getInvistor.fulfilled]: (state, action) => {
      state.invistor = action.payload;
    },
  },
  [getInvistor.pending]: (state, action) => {
    state.loading = true;
  },
  [getInvistor.rejected]: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
});

export const {} = invistorSlice.actions;
export default invistorSlice.reducer;
