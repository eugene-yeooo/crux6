import connection from './connection'

export async function getLogsByUsername(username: string) {
  // Step 1: Fetch logs + user + grouped media URLs
  const baseLogs = await connection('logs')
    .join('users', 'logs.user_id', 'users.id')
    .leftJoin('media', 'logs.id', 'media.log-id') //
    .where('users.username', username)
    .select(
      'logs.*',
      'users.username',
      connection.raw('COALESCE(json_group_array(media.url), "[]") as media_urls')
    )
    .groupBy('logs.id')

  // Step 2: Collect log IDs by type (returns an array)
  const caveLogIds = baseLogs.filter(log => log.type === 'cave').map(log => log.id)
  // const climbLogIds = baseLogs.filter(log => log.type === 'climb').map(log => log.id)
  // const canyonLogIds = baseLogs.filter(log => log.type === 'canyon').map(log => log.id)
  // const alpineLogIds = baseLogs.filter(log => log.type === 'alpine').map(log => log.id)
  // const diveLogIds = baseLogs.filter(log => log.type === 'dive').map(log => log.id)

  // Step 3: Fetch subtable records (returns the row matching the IDs)
  const caveLogs = await connection('log-caves').whereIn('log_id', caveLogIds)
  const caveMap = Object.fromEntries(caveLogs.map(log => [log.log_id, log])) //Object.fromEntries() is a built-in JavaScript method that converts an array of key-value pairs into an object.

  // const climbLogs = await connection('log-climbs').whereIn('log_id', climbLogIds)
  // const climbMap = Object.fromEntries(climbLogs.map(log => [log.log_id, log]))

  // const canyonLogs = await connection('log-canyons').whereIn('log_id', canyonLogIds)
  // const canyonMap = Object.fromEntries(canyonLogs.map(log => [log.log_id, log]))

  // const alpineLogs = await connection('log-alpine').whereIn('log_id', alpineLogIds)
  // const alpineMap = Object.fromEntries(alpineLogs.map(log => [log.log_id, log]))

  // const diveLogs = await connection('log-dives').whereIn('log_id', diveLogIds)
  // const diveMap = Object.fromEntries(diveLogs.map(log => [log.log_id, log]))

  // Step 4: Combine shared + specific log data (aka a 'merge')
  const fullLogs = baseLogs.map(log => ({
    ...log,
    media: JSON.parse(log.media_urls),
    details:
      log.type === 'cave' ? caveMap[log.id] ?? null
      // : log.type === 'climb' ? climbMap[log.id] ?? null
      // : log.type === 'canyon' ? canyonMap[log.id] ?? null
      // : log.type === 'alpine' ? alpineMap[log.id] ?? null
      // : log.type === 'dive' ? diveMap[log.id] ?? null
      : null,
  }))

  return fullLogs
}
