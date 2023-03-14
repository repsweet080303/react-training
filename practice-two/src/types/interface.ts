interface IUserResponse<T> {
  data: T[] | null,
  error: string | null,
}

export default IUserResponse;
