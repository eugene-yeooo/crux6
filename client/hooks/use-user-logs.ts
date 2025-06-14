import { useQuery } from '@tanstack/react-query'
import request from 'superagent'
import { Log } from '../models/models'

const rootURL = new URL('/api/v1', document.baseURI)

export default function useUserLogs(username: string | undefined) {
  return useQuery({
    enabled: !!username,
    queryKey: ['userLogs', username],
    queryFn: async () => {
      const res = await request.get(`${rootURL}/users/${username}/logs`)
      return res.body as { logs: Log[] }
    },
  })
}
