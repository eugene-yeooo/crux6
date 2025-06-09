export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('users').del()

  // Inserts seed entries
  await knex('users').insert([
    {
      id: 1,
      name: 'Alice Johnson',
      username: 'alicej',
      email: 'alice@example.com',
      password_hash: '$2b$10$dummyhashforalice1234567890', // dummy bcrypt hash
      avatar_url: 'https://example.com/avatars/alice.jpg',
      bio: 'Adventure seeker and rock climber.',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: 2,
      name: 'Bob Smith',
      username: 'bob_smith',
      email: 'bob@example.com',
      password_hash: '$2b$10$dummyhashforbob1234567890123456',
      avatar_url: 'https://example.com/avatars/bob.jpg',
      bio: 'Diving enthusiast and photographer.',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: 3,
      name: 'Carmen Lee',
      username: 'carmen_lee',
      email: 'carmen@example.com',
      password_hash: '$2b$10$dummyhashforcarmen1234567890',
      avatar_url: null,
      bio: 'Exploring caves one trip at a time.',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: 4,
      name: 'David Kim',
      username: 'davekim',
      email: 'david@example.com',
      password_hash: '$2b$10$dummyhashfordavid123456789012345',
      avatar_url: 'https://example.com/avatars/david.jpg',
      bio: null,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: 5,
      name: 'Eva Green',
      username: 'evag',
      email: 'eva@example.com',
      password_hash: '$2b$10$dummyhashforeva1234567890123456',
      avatar_url: null,
      bio: 'Lover of canyoning and the outdoors.',
      created_at: new Date(),
      updated_at: new Date(),
    },
  ])
}
