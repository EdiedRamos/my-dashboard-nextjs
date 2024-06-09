import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CounterState {
  count: number;
  isReady: boolean;
}

const initialState: CounterState = {
  count: 0,
  isReady: false,
};

const counterSlice = createSlice({
  name: "counter",
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
    initCounterState(state, action: PayloadAction<number>) {
      if (state.isReady) return;
      state.count = Math.max(0, action.payload);
      state.isReady = true;
    },
  },
});

export const {
  incrementByOne,
  decrementByOne,
  resetCounter,
  initCounterState,
} = counterSlice.actions;

export default counterSlice.reducer;
