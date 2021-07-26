import { IUsersState } from "./UsersState.model";

export interface IAppState {
    search: {
        query: string;
    };
    users: IUsersState;
    messages: {
      isFetching: boolean;
      errorMessage: string;
    };
}