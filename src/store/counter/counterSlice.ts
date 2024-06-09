import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CounterState {
  count: number;
}

const initialState: CounterState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counterSlice",
  initialState,
  reducers: {
    incrementByOne(state) {
      state.count++;
    },
    decrementByOne(state) {
      state.count = Math.max(0, state.count - 1);
    },
    resetCounter(state, action: PayloadAction<number>) {
      state.count = Math.max(0, action.payload);
    },
  },
});

export const { incrementByOne, decrementByOne, resetCounter } =
  counterSlice.actions;

export default counterSlice.reducer;
