import { Adventure } from '../../models/models'

export default function AdventureLogList({
  adventures,
}: {
  adventures: Adventure[]
}) {
  if (adventures.length === 0) {
    return (
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-4xl mx-auto my-2">
        <p className="text-center text-gray-500">No adventures logged yet.</p>
      </div>
    )
  }

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-4xl mx-auto my-2">
      <ul className="space-y-4">
        {adventures.map((adv) => (
          <li key={adv.id} className="border-b pb-4 last:border-b-0">
            <h4 className="text-lg font-semibold text-brandBlack">{adv.title}</h4>
            <p className="text-sm text-gray-500">
              {adv.date} – {adv.location}
            </p>
            {adv.description && (
              <p className="text-sm text-gray-700 mt-2">{adv.description}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
