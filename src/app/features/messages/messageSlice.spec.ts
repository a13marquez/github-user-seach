import messageReducer from './messagesSlice'

describe('Messages reducer', () => {
  const initialState = {
    isFetching: false,
    errorMessage: ''
  }
  it('Should handle the inital state', () => {
    expect(messageReducer(undefined, { type: 'unknown' })).toEqual(initialState)
  })
})
