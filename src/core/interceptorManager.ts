import { RejectedFn, ResolvedFn, AxiosInterceptorManager } from '../types'

interface Interceptor<T> {
  resolved: ResolvedFn
  rejected?: RejectedFn
}

export default class InterceptorManager<T> implements AxiosInterceptorManager<T> {
  private interceptors: Array<Interceptor<T> | null>

  constructor() {
    this.interceptors = []
  }

  use(resolved: ResolvedFn, rejected: RejectedFn): number {
    this.interceptors.push({
      resolved,
      rejected
    })
    return this.interceptors.length - 1
  }

  eject(index: number): void {
    if (this.interceptors[index]) {
      this.interceptors[index] = null
    }
  }

  forEach(fn: (interceptor: Interceptor<T>) => void): void {
    this.interceptors.forEach(interceptor => {
      if (interceptor) {
        fn(interceptor)
      }
    })
  }
}
