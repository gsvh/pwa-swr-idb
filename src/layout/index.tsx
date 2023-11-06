import { Suspense } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useInternetConnectivity } from '../hooks/useInternetConnectivity'
import './index.css'

export function Layout() {
  const { isOnline } = useInternetConnectivity()
  const navigate = useNavigate()
  return (
    <Suspense fallback={<>Loading ...</>}>
      <div className="wrapper">
        <div className="status-bar">
          <button onClick={() => navigate('/')}>Home</button>
          <h3>{isOnline ? '🟢 Online' : '🔴 Offline'}</h3>
        </div>
        <Outlet />
      </div>
    </Suspense>
  )
}
