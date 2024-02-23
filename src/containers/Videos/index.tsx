import { Video } from '../../components/Video'
import './index.css'

const shortVideos = [
  {
    name: 'He-Man',
    url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
  },
  {
    name: 'Transformers',
    url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
  },
]

const mediumVideos = [
  {
    name: 'Looney Tunes',
    url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4',
  },
]

function Videos() {
  return (
    <div className="vertical-stack">
      <h1>Short Videos</h1>
      <h2>2-3 min</h2>
      {shortVideos.map((video) => (
        <Video key={video.name} videoName={video.name} videoUrl={video.url} />
      ))}

      <h1>Medium Videos</h1>
      <h2>~7 min</h2>
      <p>
        These videos will not download, since our current method of caching
        video data doesn't implement chunking.
      </p>
      {mediumVideos.map((video) => (
        <Video key={video.name} videoName={video.name} videoUrl={video.url} />
      ))}
    </div>
  )
}

export default Videos
