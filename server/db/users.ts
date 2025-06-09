import connection from './connection.ts'

export function getUserByUsername(username: string) {
  return connection('users').where({ username }).first()
}
