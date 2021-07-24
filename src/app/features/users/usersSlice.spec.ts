import usersReducer from './usersSlice'

describe('users reducer', () => {
  const initialState = {
    users: [],
    usersCount: 0,
  }
  it('Should handle the inital state', () => {
    expect(usersReducer(undefined, { type: 'unknown' })).toEqual(initialState)
  })
})

