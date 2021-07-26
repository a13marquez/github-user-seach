import { createSlice } from '@reduxjs/toolkit'
import { searchUsersAsync } from '../../thunks/searchUsers'


const initialState = {
  query: '',
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(searchUsersAsync.pending, (state, action) => {
        state.query = action.payload as unknown as string;
      })
  }
})


export default searchSlice.reducer;