enum CacheType {
  local,
  session,
}

class StorageCache {
  storage: Storage

  constructor(type: CacheType) {
    this.storage = type === CacheType.local ? localStorage : sessionStorage
  }

  setCache(key: string, value: any) {
    if (value !== null && value !== undefined) {
      this.storage.setItem(key, JSON.stringify(value))
    }
  }

  getCache(key: string) {
    const value = this.storage.getItem(key)
    if (value !== null && value !== undefined) return JSON.parse(value)
    else return null
  }

  removeCache(key: string) {
    this.storage.removeItem(key)
  }

  clearCache() {
    this.storage.clear()
  }
}

const localCache = new StorageCache(CacheType.local)
const sessionCache = new StorageCache(CacheType.session)

export { localCache, sessionCache }
