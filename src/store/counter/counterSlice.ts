import { createSlice } from "@reduxjs/toolkit";

interface CounterState {
  count: number;
}

const initialState: CounterState = {
  count: 10,
};

const counterSlice = createSlice({
  name: "counterSlice",
  initialState,
  reducers: {},
});

export const {} = counterSlice.actions;

export default counterSlice.reducer;
