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
        state.isFetching = true
      })
      .addCase(searchUsersAsync.fulfilled, (state) => {
        state.isFetching = false
      })
  }
})

export default messageSlice.reducer
