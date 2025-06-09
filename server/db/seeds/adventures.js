export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('adventures').del()

  // Inserts seed entries
  await knex('adventures').insert([
    {
      id: 1,
      user_id: 1,
      type: 'climb',
      title: 'Boulder Send Session',
      description: 'Sent three V5s at the gym. Felt strong today!',
      location: 'Hangdog Climbing Gym',
      date: '2024-05-15',
    },
    {
      id: 2,
      user_id: 1,
      type: 'cave',
      title: 'Waitomo Glowworm Tour',
      description: 'Explored glowworm caves with headlamps and guides.',
      location: 'Waitomo, NZ',
      date: '2024-03-10',
    },
    {
      id: 3,
      user_id: 2,
      type: 'dive',
      title: 'Shipwreck Dive',
      description: 'Saw coral-covered wreckage and a moray eel.',
      location: 'Poor Knights Islands',
      date: '2024-04-05',
    },
    {
      id: 4,
      user_id: 1,
      type: 'canyon',
      title: 'Leaping Burn Canyon',
      description: 'Cold water, but a beautiful rappel through waterfalls.',
      location: 'Queenstown, NZ',
      date: '2024-01-20',
    },
    {
      id: 5,
      user_id: 3,
      type: 'climb',
      title: 'Trad Day on Wharepapa',
      description: 'Cracked a clean 5.10a on natural gear!',
      location: 'Wharepapa South',
      date: '2024-06-01',
    },
  ])
}
