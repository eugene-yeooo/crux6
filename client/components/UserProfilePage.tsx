import { useState } from 'react'
import { useParams } from 'react-router'
import { useUserProfile, useUserAdventures } from '../hooks/api'
import { Adventure } from '../models/models'

import ProfileDetails from './ProfileDetails'
import ProfileSummaryStats from './ProfileSummaryStats'
import NavProfileAdventureFilter from './NavProfileAdventureFilter'
import ProfileLogList from './ProfileLogList'

export default function UserProfilePage() {
  const { username } = useParams<{ username: string }>()
  const [filter, setFilter] = useState<string>('all')

  const {
    data: profileData,
    isLoading: loadingProfile,
    error: profileError,
  } = useUserProfile(username)

  const {
    data: adventureData,
    isLoading: loadingAdventures,
    error: adventureError,
  } = useUserAdventures(username)

  if (loadingProfile || loadingAdventures) return <p>Loading...</p>
  if (profileError || adventureError) return <p>Error loading profile data.</p>

  const user = profileData?.user
  const adventures: Adventure[] = adventureData?.adventures ?? []

  const filteredAdventures =
    filter === 'all'
      ? adventures
      : adventures.filter((adv) => adv.type === filter)

  return (
    <div>
      {user && <ProfileDetails user={user} />}
      <ProfileSummaryStats adventures={adventures} />
      <NavProfileAdventureFilter selected={filter} onChange={setFilter} />
      <ProfileLogList adventures={filteredAdventures} />
    </div>
  )
}
