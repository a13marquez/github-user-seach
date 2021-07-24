import { searchUsersAsync } from '../../thunks/searchUsers'
import messageReducer from './messagesSlice'

describe('Messages reducer', () => {
  const initialState = {
    isFetching: false,
    errorMessage: ''
  }
  it('Should handle the inital state', () => {
    expect(messageReducer(undefined, { type: 'unknown' })).toEqual(initialState)
  })

  it('Should handle the search users pending state', () => {
    expect(messageReducer(
      initialState,
      { type: searchUsersAsync.pending.type, payload: '' }
    )).toEqual({
      isFetching: true,
      errorMessage: ''
    })
  })

  it('Should handle the search users fullfiled state', () => {
    expect(messageReducer(
      { isFetching: true, errorMessage: '' },
      { type: searchUsersAsync.fulfilled.type, payload: '' }
    )).toEqual({
      isFetching: false,
      errorMessage: ''
    })
  })

  it('Should handle the search users rejected state', () => {
    expect(messageReducer(
      { isFetching: true, errorMessage: '' },
      { type: searchUsersAsync.rejected.type, payload: 'error message' }
    )).toEqual({
      isFetching: false,
      errorMessage: 'error message'
    })
  })
})
