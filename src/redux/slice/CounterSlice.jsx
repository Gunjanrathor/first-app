import { createSlice } from "@reduxjs/toolkit";

export const CounterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    showResult: (state, result) => {
      state.value = result.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { showResult } = CounterSlice.actions;

export default CounterSlice.reducer;
