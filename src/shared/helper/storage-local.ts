class storageLocal {
  static set(key: string, value: any) {
    localStorage.setItem(key, value)
  }

  static get(key: string): string | null {
    const value =
      typeof localStorage !== 'undefined' && localStorage?.getItem?.(key)
    return value ? value : null
  }

  static remove(key: string) {
    localStorage.removeItem(key)
  }

  static clear() {
    localStorage.clear()
  }
}

export default storageLocal
