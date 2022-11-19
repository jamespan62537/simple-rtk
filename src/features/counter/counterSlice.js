import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// api
import { fetchCount } from "./counterAPI";

export const incrementCountAsyncAction = createAsyncThunk(
  "counter/fetchCount",
  async (amount = 1) => {
    const response = await fetchCount(amount);
    return response.data;
  }
);

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    incrementCountAction: (state) => {
      state.count += 1;
    },
    decrementCountAction: (state) => {
      state.count -= 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(incrementCountAsyncAction.fulfilled, (state, action) => {
      state.count += action.payload;
    });
  },
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
