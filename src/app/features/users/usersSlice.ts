
import { createSlice } from '@reduxjs/toolkit'
import { IUsersState } from '../../models/UsersState.model'

const initialState: IUsersState = {
  users: [],
  usersCount: 0,
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},

})


export default usersSlice.reducer;