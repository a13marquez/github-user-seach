import { searchUsersAsync } from '../../thunks/searchUsers';
import messageReducer from './messagesSlice'

describe('Messages reducer', () => {
  const initialState = {
    isFetching: false,
    errorMessage: ''
  }
  it('Should handle the inital state', () => {
    expect(messageReducer(undefined, { type: 'unknown' })).toEqual(initialState)
  });

  it('Should handle the search users pending state', () => {
    expect(messageReducer(
      initialState,
      { type: searchUsersAsync.pending.type, payload: '' }
    )).toEqual({
      isFetching: true,
      errorMessage: ''
    })
  })
})
