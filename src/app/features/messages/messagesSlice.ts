import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isFetching: false,
  errorMessage: ''
}

export const messageSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {},
});

export default messageSlice.reducer
