import { AxiosRequestConfig } from './types'

export default function xhr(config: AxiosRequestConfig) {
  const { data = {}, params = {}, url = '', method = 'get' } = config
  const request = new XMLHttpRequest()

  request.open(method.toUpperCase(), url, true)
  request.send()
}
