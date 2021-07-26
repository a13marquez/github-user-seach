import { createSlice } from "@reduxjs/toolkit";
import { IAppState } from "../../models/appState.model";
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
      .addCase(searchUsersAsync.rejected, (state, action) => {
        state.isFetching = false
        state.errorMessage = action.payload as string
      })
  }
})

export const getIsFetching = (state: IAppState) => state.messages.isFetching
export const getError = (state: IAppState) => state.messages.errorMessage

export default messageSlice.reducer
