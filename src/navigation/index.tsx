import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { Layout } from '../layout'

const Home = lazy(() => import('../containers/Home'))
const Starwars = lazy(() => import('../containers/StarWars'))
const Videos = lazy(() => import('../containers/Videos'))

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },

      {
        path: '/star-wars',
        element: <Starwars />,
      },

      {
        path: '/videos',
        element: <Videos />,
      },
    ],
  },
])
