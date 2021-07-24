import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchUsers } from '../../../../api/client'

const initialState = {
  query: '',
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {},

})


export default searchSlice.reducer;