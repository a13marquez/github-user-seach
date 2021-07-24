import { searchUsersAsync } from '../../thunks/searchUsers'
import searchReducer from './searchSlice'

describe('Search reducer', () => {
  const initialState = {
    query: 'frank'
  }
  it('Should handle the inital state', () => {
    expect(searchReducer(undefined, { type: 'unknown' })).toEqual({
      query: '',
    })
  })

  it('Should update state when a query is done', () => {
    expect(searchReducer(
      initialState,
      { type: searchUsersAsync.pending.type, payload: 'test' }
    )).toEqual({
      query: 'test',
    })
  })
})

