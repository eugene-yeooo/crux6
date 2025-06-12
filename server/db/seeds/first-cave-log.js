export async function seed(knex) {
  // Clear tables
  await knex('media').del()
  await knex('log-caves').del()
  await knex('logs').del()

  // Insert main log
  const [logId] = await knex('logs').insert({
    user_id: 1,
    type: 'cave',
    objectiveName: "Harwood's Hole",
    title: 'Epic trip through the streamway!',
    notes: 'Epic 176 meter abseil! Fixed lines all in good condition.',
    location: 'Tākaka Hill, Golden Bay',
    date: '31-12-2020',
    created_at: new Date(),
    updated_at: new Date(),
  }).returning('id')

  // Insert cave log details
  await knex('log-caves').insert({
    log_id: logId,
    'trip-companions': 'Alice, Bob, Charlie',
    duration: 6,
    'tech-style': JSON.stringify(['SRT', 'Non-technical']),
    'route-style': 'Through-trip',
  })

  // Insert media
  await knex('media').insert([
    {
      'log-id': logId,
      type: 'photo',
      url: '/uploads/photos/streamway1.jpg',
      'thumbnail-url': '/uploads/thumbnails/streamway1_thumb.jpg',
      'file-size': 340000,
      caption: 'Entrance to the cave',
      position: 1,
      created_at: new Date(),
    },
    {
      'log-id': logId,
      type: 'photo',
      url: '/uploads/photos/streamway2.jpg',
      'thumbnail-url': '/uploads/thumbnails/streamway2_thumb.jpg',
      'file-size': 520000,
      caption: 'Stalactite formations',
      position: 2,
      created_at: new Date(),
    },
    {
      'log-id': logId,
      type: 'photo',
      url: '/uploads/photos/streamway3.jpg',
      'thumbnail-url': '/uploads/thumbnails/streamway3_thumb.jpg',
      'file-size': 410000,
      caption: 'Tight squeeze section',
      position: 3,
      created_at: new Date(),
    },
    {
      'log-id': logId,
      type: 'video',
      url: '/uploads/videos/abseil.mp4',
      'thumbnail-url': '/uploads/thumbnails/abseil_thumb.jpg',
      'file-size': 2080000,
      caption: 'SRT descent',
      position: 4,
      created_at: new Date(),
    },
  ])
}
