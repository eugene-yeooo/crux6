import connection from './connection.ts'

export function getLogsByUsername(username: string) {
  return connection('logs')
    .join('users', 'users.id', 'logs.user_id')
    .where('users.username', username)
    .select('logs.*')
}
