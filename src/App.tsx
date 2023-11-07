import { RouterProvider } from 'react-router-dom'
import { SWRConfig } from 'swr'
import './App.css'
import { IDB } from './constants'
import { router } from './navigation'
import { useCacheProvider } from './swr-idb-cache'

function App() {
  // Initialize
  const cacheProvider = useCacheProvider({
    dbName: IDB.STAR_WARS.DB,
    storeName: IDB.STAR_WARS.STORES.DATA,
  })

  // Cache Provider is being initialized - render fallback component in the meantime
  if (!cacheProvider) {
    return <div>Initializing cache…</div>
  }

  return (
    <SWRConfig value={{ provider: cacheProvider }}>
      <RouterProvider router={router} />
    </SWRConfig>
  )
}

export default App
