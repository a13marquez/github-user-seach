
import { createSlice } from '@reduxjs/toolkit'
import { IAppState } from '../../models/appState.model'
import { IUsersState } from '../../models/UsersState.model'
import { searchUsersAsync } from '../../thunks/searchUsers'

const initialState: IUsersState = {
  users: [],
  usersCount: 0,
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(searchUsersAsync.fulfilled, (state, action) => {
        state.users = action.payload.items
        state.usersCount = action.payload.total_count
      })
  }
})

export const getUsers = (state: IAppState) => state.users.users
export const getUserCount = (state: IAppState) => state.users.usersCount

export default usersSlice.reducer;