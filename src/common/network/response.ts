interface IResponse<T> {
  code: number
  message: string
  result: T
  [key: string]: any
}

export default IResponse
