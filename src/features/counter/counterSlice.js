import { createSlice } from "@reduxjs/toolkit";

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
    incrementCountByAmountAction: (state, action) => {
      state.count += action.payload;
    },
  },
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
