export default {
  set(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value))
  },

  get(key: string) {
    const val = localStorage.getItem(key)
    if (!val) return ''

    try {
      return JSON.parse(val)
    } catch (error) {
      return val
    }
  },
  remove(key: string) {
    localStorage.removeItem(key)
  },
  clear() {
    localStorage.clear()
  }
}
