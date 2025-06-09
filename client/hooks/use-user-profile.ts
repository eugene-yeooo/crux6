import { useQuery } from '@tanstack/react-query'
import request from 'superagent'
import { User } from '../../models/models'

const rootURL = new URL('/api/v1', document.baseURI)

export default function useUserProfile(username: string | undefined) {
  return useQuery({
    enabled: !!username,
    queryKey: ['userProfile', username],
    queryFn: async () => {
      const res = await request.get(`${rootURL}/users/${username}`)
      return res.body as { user: User }
    },
  })
}
