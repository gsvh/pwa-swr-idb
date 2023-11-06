import axios from 'axios'
import { openDB } from 'idb'

// /**
//  * Downloads a single file.
//  *
//  * @param {string} url URL of the file to be downloaded.
//  */
// export async function downloadFile(url: string) {
//   const response = await fetch(url)
//   const reader = response.body?.getReader()

//   if (reader) {
//     let allDone = false
//     console.log('🟢 STARTING DOWNLOAD')
//     do {
//       const { done, value } = await reader.read()

//       console.log(value)

//       // Store the `dataChunk` to IndexedDB.

//       if (done) {
//         allDone = true
//       }
//     } while (!allDone)

//     console.log('🟢 DOWNLOAD COMPLETE')
//   }
// }

export async function downloadFile(url: string) {
  const response = await axios({
    url,
    method: 'GET',
    responseType: 'arraybuffer', // to handle binary data
  })

  const db = await openDB('media', 1, {
    upgrade(db) {
      db.createObjectStore('videos')
    },
  })

  await db.put('videos', response.data, url)

  return URL.createObjectURL(new Blob([response.data]))
}

export async function getFileUrl(key: string) {
  const db = await openDB('media', 1, {
    upgrade(db) {
      db.createObjectStore('videos')
    },
  })

  const fileData = await db.get('videos', key)
  if (!fileData) {
    return null
  }

  const fileUrl = URL.createObjectURL(new Blob([fileData]))
  return fileUrl
}

export async function isVideoCached(key: string) {
  const db = await openDB('media', 1, {
    upgrade(db) {
      db.createObjectStore('videos')
    },
  })

  const fileData = await db.get('videos', key)
  return Boolean(fileData)
}
