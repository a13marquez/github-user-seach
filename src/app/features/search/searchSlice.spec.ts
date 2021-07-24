import searchReducer from './searchSlice'

describe('Search reducer', () => {
  it('Should handle the inital state', () => {
    expect(searchReducer(undefined, { type: 'unknown' })).toEqual({
      query: '',
    })
  })
});