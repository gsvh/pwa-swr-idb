import { openDB } from 'idb'
import useSWR from 'swr'
import { INDEXED_DBS } from '../../constants'
import { useInternetConnectivity } from '../../hooks/useInternetConnectivity'
import './index.css'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

const cacheFetcher = async (url: string) => {
  const db = await openDB(INDEXED_DBS.STAR_WARS.NAME, 1, {
    upgrade(db) {
      db.createObjectStore(INDEXED_DBS.STAR_WARS.STORES.DATA)
    },
  })

  const response = await db.get(INDEXED_DBS.STAR_WARS.STORES.DATA, url)
  console.log({ response, data: response?.data?.data })
  return response?.data
}

function StarWars() {
  const { isOnline } = useInternetConnectivity()
  const { data, isLoading, error } = useSWR(
    'https://swapi.dev/api/films',
    isOnline ? fetcher : cacheFetcher
  )

  if (error) {
    console.warn(error)
  }
  return (
    <div className="vertical-stack">
      <h2>Starwars</h2>
      {isLoading ? (
        <p>Loading ...</p>
      ) : // @ts-ignore
      data ? (
        data?.results?.map((film: any) => (
          <div key={film.episode_id}>
            <h3>{film.title}</h3>
            <p>{film.opening_crawl}</p>
          </div>
        ))
      ) : (
        <p> No data :( </p>
      )}
    </div>
  )
}

export default StarWars
