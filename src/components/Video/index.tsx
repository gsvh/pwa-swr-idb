import { useEffect, useState } from 'react'
import { downloadFile, getFileUrl } from '../../helpers'

import { useInternetConnectivity } from '../../hooks/useInternetConnectivity'
import './index.css'

type Props = {
  videoName: string
  videoUrl: string
}
export function Video({ videoName, videoUrl }: Readonly<Props>) {
  const [cachedVideoUrl, setCachedVideoUrl] = useState<string | null>(null)
  const [isDownloading, setIsDownloading] = useState<boolean>(false)

  const { isOnline } = useInternetConnectivity()

  const handleDownload = () => {
    setIsDownloading(true)
    downloadFile(videoUrl)
      .then((url) => {
        setCachedVideoUrl(url)
      })
      .finally(() => {
        setIsDownloading(false)
      })
  }

  useEffect(() => {
    getFileUrl(videoUrl).then((url) => {
      setCachedVideoUrl(url)
    })
  }, [])

  return (
    <div className="video-container">
      <div className="button-container">
        <h1>{videoName}</h1>
        {isDownloading ? (
          <p>Downloading ....</p>
        ) : cachedVideoUrl ? (
          <p>Downloaded</p>
        ) : isOnline ? (
          <button onClick={handleDownload}>Download</button>
        ) : (
          <p>Connect to view or download</p>
        )}
      </div>
      <video controls src={cachedVideoUrl ?? videoUrl} />
    </div>
  )
}
