import { extend } from './helpers/utils'
import Axios from './core/axios'
import { AxiosInstance } from './types'
function createInstance(): AxiosInstance {
  const context = new Axios()
  const instance = Axios.prototype.request.bind(context)
  // 变成混合对象
  return extend(instance, context)
}

const axios = createInstance()

export default axios
