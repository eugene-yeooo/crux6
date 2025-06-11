import { useState } from 'react'
import { useParams } from 'react-router'
import { useUserProfile, useUserLogs } from '../../hooks/api'
import { Log } from '../../models/models'

import ProfileDetails from './ProfileDetails'
import ProfileSummaryStats from './ProfileSummaryStats'
import NavProfileFilter from './NavProfileFilter'
import ProfileLogList from './ProfileLogList'
import NotableSends from './NotableSends'

export default function UserProfilePage() {
  const { username } = useParams<{ username: string }>()
  const [filter, setFilter] = useState<string>('all')

  const {
    data: profileData,
    isLoading: loadingProfile,
    error: profileError,
  } = useUserProfile(username)

  const {
    data: logData,
    isLoading: loadingLogs,
    error: logError,
  } = useUserLogs(username) 
  if (loadingProfile || loadingLogs) return <p>Loading...</p>
  if (profileError || logError) return <p>Error loading profile data.</p>

  const user = profileData?.user
  const logs: Log[] = logData?.logs ?? []

  const filteredLogs =
    filter === 'all'
      ? logs
      : logs.filter((log) => log.type === filter)

  return (
    <div>
      {user && <ProfileDetails user={user} />}
      <ProfileSummaryStats logs={logs} />
      <NotableSends logs={logs} />
      <NavProfileFilter selected={filter} onChange={setFilter} />
      <ProfileLogList logs={filteredLogs} />
    </div>
  )
}
