import { AxiosRequestConfig, AxiosPromise, AxiosResponse } from './types'
import Xhr from './xhr'
import { buildUrl } from './helpers/url'
import { transformRequest, transformResponse } from './helpers/data'
import { processHeaders } from './helpers/header'
function axios(config: AxiosRequestConfig): AxiosPromise {
  // todo
  processConfig(config)
  return Xhr(config).then(res => {
    res.data = transformResponseData(res)
    return res
  })
}

function processConfig(config: AxiosRequestConfig) {
  config.url = transformUrl(config)
  config.headers = transformHeaders(config)
  config.data = transformRequestData(config)
}

function transformUrl(config: AxiosRequestConfig): string {
  const { url, params } = config
  return buildUrl(url, params)
}

function transformRequestData(config: AxiosRequestConfig): any {
  return transformRequest(config.data)
}

function transformHeaders(config: AxiosRequestConfig) {
  const { headers = {}, data } = config
  return processHeaders(headers, data)
}

function transformResponseData(config: AxiosResponse) {
  return transformResponse(config.data)
}

export default axios
