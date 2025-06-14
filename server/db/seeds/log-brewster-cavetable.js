export async function seed(knex) {
  
  const log = await knex('logs')
  .select('id')
  .where({ objectiveName: 'Brewster Glacier', date: '2024-05-04' })
  .first()

  // Clear tables
  await knex('log-caves').del()


  // Insert cave log details
  await knex('log-caves').insert({
    log_id: log.id,
    'trip-companions': 'Anna Petersen, Drew Fuller, Aaron Madigan',
    duration: 10,
    'tech-style': JSON.stringify(['Ice Cave']),
    'route-style': 'In/Out',
  })
}