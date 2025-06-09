export interface CaveLog {
  logId: number
  caveName: string
  caveDate: number
  tripCompanions: string
  caveLocation: string
  tripDuration: number
  tripNotes: 

}

export interface User {
  id: number
  name: string
  username: string
  email: string
  avatar_url?: string
  bio?: string
}

export interface Adventure {
  id: number
  user_id: number
  type: 'climb' | 'canyon' | 'cave' | 'dive'
  title: string
  description?: string
  location?: string
  date: string
  grade?: string | number
}

export interface Props {
  userId: number
}

export interface ProfileDetails {
  user: {
    name: string
    username: string
    avatar_url?: string
    bio?: string
  }
}