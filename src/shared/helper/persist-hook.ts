import storageLocal from 'shared/helper/storage-local'
import { User } from 'models/User'

const localStorageEffect =
  (key) =>
  ({ setSelf, onSet }) => {
    const savedValue = storageLocal.get(key)
    if (savedValue) {
      setSelf(JSON.parse(savedValue) as User)
    }
    onSet((newValue, _, isReset) => {
      if (newValue === undefined) {
        storageLocal.remove(key)
        return
      }
      isReset
        ? storageLocal.remove(key)
        : storageLocal.set(key, JSON.stringify(newValue))
    })
  }

export default localStorageEffect
