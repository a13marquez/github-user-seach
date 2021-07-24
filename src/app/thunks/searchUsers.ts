import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUsers } from "../../api/client";

export const searchUsersAsync = createAsyncThunk(
  'search/searchUsers',
  async (query: string) => {
    const response = await fetchUsers(query)
    return response;
  }
);