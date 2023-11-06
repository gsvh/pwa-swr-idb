import type { StorageHandler } from '../types'
import simpleStorageHandler from './simple'

type Data = any
type StoreObject = {
  value: Data
  ts: number
}

/**
 * Storage value handler that wraps value in object containing timestamp
 */
const timestampStorageHandler: StorageHandler<Data, StoreObject> = {
  ...simpleStorageHandler,

  /**
   * @inheritdoc
   */
  initialize(database, storeName) {
    const objectStore = database.createObjectStore(storeName)

    objectStore.createIndex('ts', 'ts')
  },

  /**
   * @inheritdoc
   */
  replace: (_, value) => ({
    value,
    ts: Date.now(),
  }),

  /**
   * @inheritdoc
   */
  revive: (_, storeObject) => storeObject.value,
} as const

export default timestampStorageHandler
