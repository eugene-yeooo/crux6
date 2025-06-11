import { Adventure } from '../../models/models'
import LogCard from '../LogCard'

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
    <div className="grid gap-4">
      {adventures.map(adventure => (
        <LogCard key={adventure.id} log={adventure} />
      ))}
    </div>
  )
}
