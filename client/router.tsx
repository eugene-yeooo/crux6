import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router'

import App from './components/App'
import NavLog from './components/NavLog'
import LogCave from './components/LogCave'
import UserProfilePage from './components/UserProfilePage'
import Dashboard from './components/Dashboard'
import Explore from './components/Explore'

const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<Dashboard />} />
    <Route path="log-nav" element={<NavLog />} />
      <Route path="log-nav/log-cave" element={<LogCave />} />
      {/* <Route path="log-climb" element={<LogClimb />} />
      <Route path="log-canyon" element={<LogCanyon />} />
      <Route path="log-dive" element={<LogDive />} /> */}
    

    {/* User profile with dynamic username param */}
    <Route path="user/:username" element={<UserProfilePage />} />
    <Route path='explore' element={<Explore />} />
  </Route>
)

const router = createBrowserRouter(routes)

export default router