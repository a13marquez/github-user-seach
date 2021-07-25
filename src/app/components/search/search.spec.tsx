
import React from 'react'
import { Search } from './search'
import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { axe, toHaveNoViolations } from 'jest-axe'

expect.extend(toHaveNoViolations)

const mockDispatch = jest.fn()
const mockSearchUsersAsync = jest.fn()

jest.mock('../../thunks/searchUsers', () => ({
  searchUsersAsync: () => mockSearchUsersAsync,
}));

jest.mock('react-redux', () => ({
  useDispatch: () => mockDispatch,
}));

describe('Testing Search Component', () => {
  beforeEach(() => {
    render(<Search />);
  })
  afterEach(() => {
    cleanup()
  })
  test('should render an input for search an user', () => {
    const searchInput = screen.queryByPlaceholderText('Search an user')
    expect(searchInput).toBeVisible()
  })

  test('should render a button for search an user', () => {
    const button = screen.getByRole('button')
    expect(button).toBeVisible()
  })

  test('should update the input state when the user introduce text', async () => {
    const searchInput = screen.getByTestId('user-search')
    await userEvent.type(searchInput, 'search')
    expect(searchInput).toHaveValue('search')
  })

  test('should dispatch the search users actions when button is clicked', async () => {
    const searchInput = screen.getByTestId('user-search');
    await userEvent.type(searchInput, 'search');
    const button = screen.getByRole('button');
    await userEvent.click(button)
  
    expect(mockDispatch).toHaveBeenCalledWith(mockSearchUsersAsync)
  })
  it('Should be accesible', async () => {
    const { container } = render(<Search />)
    expect(await axe(container)).toHaveNoViolations()
  })
})
