import { Video } from '../../components/Video'
import './index.css'

const videos = [
  {
    name: 'He-Man',
    url: 'https://player.odycdn.com/v6/streams/59b4017390a032f34fb948f51c0a1b325f016223/9b905a.mp4',
  },
  {
    name: 'Transformers',
    url: 'https://player.odycdn.com/v6/streams/7124aaec698e758f3ef91c8fd4ee81d818416d62/e06600.mp4',
  },
]

function Videos() {
  // const [cachedVideoUrl, setCachedVideoUrl] = useState<string | null>(null)

  // const videoUrl =
  //   'https://player.odycdn.com/v6/streams/59b4017390a032f34fb948f51c0a1b325f016223/9b905a.mp4' // HE-MAN

  // // 'https://player.odycdn.com/v6/streams/7124aaec698e758f3ef91c8fd4ee81d818416d62/e06600.mp4' // Transformers

  // useEffect(() => {
  //   getFileUrl(videoUrl).then((url) => {
  //     setCachedVideoUrl(url)
  //   })
  // }, [])

  // console.log(cachedVideoUrl)

  return (
    <div className="vertical-stack">
      <h2>Videos</h2>
      {videos.map((video) => (
        <Video key={video.name} videoName={video.name} videoUrl={video.url} />
      ))}
    </div>
  )
}

export default Videos
