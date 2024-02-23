import { useEffect, useMemo, useState } from 'react'
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

  const url = useMemo(() => {
    return cachedVideoUrl ?? videoUrl
  }, [cachedVideoUrl, videoUrl])

  useEffect(() => console.log({ url }), [url])

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
  }, [videoUrl])

  return (
    <div className="video-container">
      <div className="button-container">
        <h2>{videoName}</h2>
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
      <video autoPlay={false} playsInline={true} controls={true} src={url} />
    </div>
  )
}
