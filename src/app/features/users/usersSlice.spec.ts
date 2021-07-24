import { searchUsersAsync } from '../../thunks/searchUsers'
import usersReducer from './usersSlice'

describe('users reducer', () => {
  const initialState = {
    users: [],
    usersCount: 0,
  }
  const response = {
    total_count: 1,
    incomplete_results: false,
    items: [{
      login: 'frank',
      id: 20204556,
      node_id: 'MDQ6VXNlcjIwMjA0NTU2',
      avatar_url: 'https://avatars.githubusercontent.com/u/20204556?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/frank',
      html_url: 'https://github.com/frank',
      followers_url: 'https://api.github.com/users/frank/followers',
      following_url: 'https://api.github.com/users/frank/following{/ther_user',
      gists_url: 'https://api.github.com/users/frank/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/frank/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/frank/subscriptions',
      organizations_url: 'https://api.github.com/users/frank/orgs',
      repos_url: 'https://api.github.com/users/frank/repos',
      events_url: 'https://api.github.com/users/frank/events{/privacy}',
      received_events_url: 'https://api.github.com/users/frank/eceived_events',
      type: 'User',
      site_admin: false,
      score: 1.0
    }]
  }
  it('Should handle the inital state', () => {
    expect(usersReducer(undefined, { type: 'unknown' })).toEqual(initialState)
  })

  it('Should handle the search users response', () => {
    expect(usersReducer(
      initialState,
      { type: searchUsersAsync.fulfilled.type, payload: response }
    )).toEqual({
      users: response.items,
      usersCount: response.total_count
    })
  })
})

