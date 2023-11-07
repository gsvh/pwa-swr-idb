import axios from 'axios'
import { openDB } from 'idb'
import { IDB } from '../constants'

/**
 * This function downloads a video file, stores it in IndexedDB, and returns a URL representing the file data.
 *
 * @param {string} url - The URL of the video file to download.
 * @returns {Promise<string>} - A promise that resolves to a URL representing the downloaded video file data.
 *
 * @example
 *
 * const videoUrl = await downloadFile('http://example.com/file.mp4');
 * videoElement.src = videoUrl;
 */
export async function downloadFile(url: string): Promise<string> {
  const response = await axios({
    url,
    method: 'GET',
    responseType: 'arraybuffer', // to handle binary data
  })

  const db = await openDB(IDB.MEDIA.DB, IDB.MEDIA.VERSION, {
    upgrade(db) {
      db.createObjectStore(IDB.MEDIA.STORES.VIDEOS)
    },
  })

  await db.put(IDB.MEDIA.STORES.VIDEOS, response.data, url)

  return URL.createObjectURL(new Blob([response.data], { type: 'video/mp4' })) // specify the type for safari
}

/**
 * This function retrieves a video file from IndexedDB and returns a URL representing the file data.
 *
 * @param {string} key - The key to identify the video file in the database.
 * @returns {Promise<string | null>} - A promise that resolves to a URL representing the video file data, or null if no file data is found for the provided key.
 *
 * @example
 *
 * const videoUrl = await getFileUrl('http://example.com/file.mp4');
 * if (videoUrl) {
 *   videoElement.src = videoUrl;
 * }
 */
export async function getFileUrl(key: string): Promise<string | null> {
  const db = await openDB(IDB.MEDIA.DB, IDB.MEDIA.VERSION, {
    upgrade(db) {
      db.createObjectStore(IDB.MEDIA.STORES.VIDEOS)
    },
  })

  const fileData = await db.get(IDB.MEDIA.STORES.VIDEOS, key)
  if (!fileData) {
    return null
  }

  const fileUrl = URL.createObjectURL(
    new Blob([fileData], { type: 'video/mp4' })
  )
  return fileUrl
}
