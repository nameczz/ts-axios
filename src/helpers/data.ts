import { isPlainObject } from './utils'

// data 接受几种形式的参数： string blob ... 等等。
// 可以在mdn上看

export function transformRequest(data: any): any {
  if (isPlainObject(data)) {
    return JSON.stringify(data)
  }
  return data
}
