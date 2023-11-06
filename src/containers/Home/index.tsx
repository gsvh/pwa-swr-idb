import { useNavigate } from 'react-router-dom'
import './index.css'

function Home() {
  const navigate = useNavigate()

  return (
    <div className="home">
      <h1>Welcome!</h1>
      <p>Please download the PWA by clicking the download button above 💅</p>
      <div className="container">
        {/* <p>
          {' '}
          This is an attempt to showcase an implementation of caching data with
          SWR for offline use. <br />
          Go ahead and test it out by navigating to the Star Wars page below,
          then disconnect from the internet. You should be able to still see the
          data, even when you close and reopen the app! 🥳{' '}
        </p> */}
        <button onClick={() => navigate('/star-wars')}>Star Wars 🛸</button>

        <button onClick={() => navigate('/Videos')}>Videos 📽️</button>
      </div>
    </div>
  )
}

export default Home
