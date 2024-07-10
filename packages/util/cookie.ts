import { deleteCookie, getCookie, hasCookie, setCookie } from 'cookies-next'
import type { OptionsType } from 'cookies-next/src/types'

export namespace $cookie {
  export const get = (name: string) => {
    return getCookie(name)
  }

  export const has = (name: string) => {
    return hasCookie(name)
  }

  export const set = (name: string, value: string, options?: OptionsType) => {
    return setCookie(name, value, options)
  }

  export const remove = (name: string, options?: OptionsType) => {
    return deleteCookie(name, options)
  }
}
