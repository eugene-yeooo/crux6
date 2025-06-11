import { Adventure } from '../../models/models'

export default function NotableSends({
  adventures,
}: {
  adventures: Adventure[]
}) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mt-6">
      <h3 className="text-xl font-semibold mb-4 text-brandBlack">Notable Sends</h3>
      <p className="text-gray-500">No notable sends to display yet.</p>
    </div>
  )
}
