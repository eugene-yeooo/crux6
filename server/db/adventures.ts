import connection from './connection.ts'

export function getAdventuresByUsername(username: string) {
  return connection('adventures')
    .join('users', 'users.id', 'adventures.user_id')
    .where('users.username', username)
    .select('adventures.*')
}
