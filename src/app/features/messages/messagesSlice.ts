import { createSlice } from "@reduxjs/toolkit";
import { searchUsersAsync } from "../../thunks/searchUsers";

const initialState = {
  isFetching: false,
  errorMessage: ''
}

export const messageSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(searchUsersAsync.pending, (state) => {
        state.isFetching = true;
      })
  }
});

export default messageSlice.reducer
