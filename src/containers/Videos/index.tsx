import { Video } from '../../components/Video'
import './index.css'

const shortVideos = [
  {
    name: 'He-Man',
    url: 'https://s3.eu-west-1.amazonaws.com/dev.wolkskool-assets/HEYYEYAAEYAAAEYAEYAA.mp4',
  },
  {
    name: 'Transformers',
    url: 'https://player.odycdn.com/v6/streams/7124aaec698e758f3ef91c8fd4ee81d818416d62/e06600.mp4',
  },
]

const mediumVideos = [
  {
    name: 'Looney Tunes',
    url: 'https://player.odycdn.com/v6/streams/6b67b67212b8f4c54fbd8ca950755078a1e0ffd8/c2f062.mp4',
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
