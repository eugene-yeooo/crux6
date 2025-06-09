import { User } from '../../models/models'

export default function ProfileDetails({ user }: { user: User }) {
  return (
    <div>
      <img
        src={user.avatar_url || '/default-avatar.png'}
        alt="avatar"
        width={80}
        height={80}
      />
      <h2>{user.name}</h2>
      <p>@{user.username}</p>
      {user.bio && <p>{user.bio}</p>}
    </div>
  )
}
