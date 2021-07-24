import { IUser } from "./User.model";

export interface IUsersState {
  users: IUser[],
  usersCount: number,
}