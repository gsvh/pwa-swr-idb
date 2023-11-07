import { Video } from '../../components/Video'
import './index.css'

const shortVideos = [
  {
    name: 'He-Man',
    url: 'https://player.odycdn.com/v6/streams/632b113daa75d9f8a93049286ed56daec45c64fb/508c8c.mp4',
  },
  {
    name: 'Transformers',
    url: 'https://player.odycdn.com/v6/streams/7124aaec698e758f3ef91c8fd4ee81d818416d62/e06600.mp4',
  },
]

const mediumVideos = [
  {
    name: 'Looney Tunes',
    url: 'https://player.odycdn.com/v6/streams/ff43bdc4a96a4dbe30c60f63fa522458f8e51522/33f4d4.mp4',
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
