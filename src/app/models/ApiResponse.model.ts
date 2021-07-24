export interface IApiResponse {
  total_count: number,
  incomplete_results: boolean,
  items: IUser[]
}