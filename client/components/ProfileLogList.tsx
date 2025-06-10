import { Adventure } from '../models/models'

export default function AdventureLogList({
  adventures,
}: {
  adventures: Adventure[]
}) {
  if (adventures.length === 0) {
    return <p>No adventures found.</p>
  }

  return (
    <ul>
      {adventures.map((adv) => (
        <li key={adv.id}>
          <h4>{adv.title}</h4>
          <p>
            {adv.date} – {adv.location}
          </p>
          {adv.description && <p>{adv.description}</p>}
        </li>
      ))}
    </ul>
  )
}
