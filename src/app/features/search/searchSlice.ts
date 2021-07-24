import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  query: '',
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {},

})


export default searchSlice.reducer;