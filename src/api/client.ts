import { IApiResponse } from "../app/models/ApiResponse.model";


const API_URL = 'https://api.github.com/';

export const fetchUsers:
  (query: string) => Promise<IApiResponse> = (query) => {
  return fetch(`${API_URL}search/users?q=${query}`)
    .then(response => response.json())
  }


