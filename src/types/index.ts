export type Method = 'post' | 'POST' | 'get' | 'GET' | 'DELETE' | 'delete' | ''
export interface AxiosRequestConfig {
  url: string
  method: Method
  data?: any
  params?: any
  headers?: any
}
