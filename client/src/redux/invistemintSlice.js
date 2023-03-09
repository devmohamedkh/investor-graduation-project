import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const addInvistemint = createAsyncThunk(
  "invistemint/addInvistemint",
  async (invistemint, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/invistements/",
        invistemint
      );
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const deleteInvistemint = createAsyncThunk(
  "invistemint/deleteInvistemint",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/invistements/${id}`
      );
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const getInvistemints = createAsyncThunk(
  "invistemint/getInvistemints",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("http://localhost:5000/api/invistemint");
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getInvistorInvistemints = createAsyncThunk(
  "invistemint/getInvistorInvistemints",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/invistements/invistor/${id}`
      );
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const invistemintSlice = createSlice({
  name: "invistemint",
  initialState: {
    invistemints: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [addInvistemint.pending]: (state, action) => {
      state.loading = true;
    },
    [addInvistemint.fulfilled]: (state, action) => {
      state.loading = false;
      state.invistemints.push(action.payload);
    },
    [addInvistemint.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      toast.error(state.error.message);
    },
    [deleteInvistemint.pending]: (state, action) => {
      state.loading = true;
    },
    [deleteInvistemint.fulfilled]: (state, action) => {
      state.loading = false;
      state.invistemints = state.invistemints.filter(
        (invistemint) => invistemint.id !== action.payload
      );
    },
    [deleteInvistemint.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      toast.error(state.error.message);
    },
    [getInvistemints.pending]: (state, action) => {
      state.loading = true;
    },
    [getInvistemints.fulfilled]: (state, action) => {
      state.loading = false;
      state.invistemints = action.payload;
    },
    [getInvistemints.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      toast.error(state.error.message);
    },
    [getInvistorInvistemints.pending]: (state, action) => {
      state.loading = true;
    },
    [getInvistorInvistemints.fulfilled]: (state, action) => {
      state.loading = false;
      state.invistemints = action.payload;
    },
    [getInvistorInvistemints.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      toast.error(state.error.message);
    },
  },
});

// export const {} = invistemintSlice.actions;
export default invistemintSlice.reducer;
