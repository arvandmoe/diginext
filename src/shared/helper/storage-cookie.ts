import CookieJs from 'js-cookie'
import Cookies from 'cookie'

class storageCookie {
  static set(key: string, value: any) {
    CookieJs.set(key, value)
  }
  static get(req: any, key: string) {
    const cookies = Cookies.parse((req && req?.headers?.cookie) || '')
    if (!cookies || !cookies[key] || cookies[key] === '') {
      return null
    }
    return cookies[key]
  }
}

export default storageCookie
