import { AxiosRequestConfig } from './types'
import Xhr from './xhr'
function axios(config: AxiosRequestConfig) {
  // todo
  Xhr(config)
}

export default axios
