import { Adventure } from '../../models/models'

export default function AdventureSummaryStats({
  adventures,
}: {
  adventures: Adventure[]
}) {
  const total = adventures.length
  const canyons = adventures.filter((a) => a.type === 'canyon')
  const climbs = adventures.filter((a) => a.type === 'climb')
  const hardest =
    climbs
      .map((c) => c.grade || '')
      .sort()
      .slice(-1)[0] || 'N/A'

  return (
    <div className="p- max-w-4xl mx-auto mb-6">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <StatBox label="Total Sends" value="386" />
        <StatBox label="Distance Climbed" value="12.6km" />      
        <StatBox label="Canyons Logged" value="42"/>
        <StatBox label="Hours Caving" value="106" />
      </div>
    </div>
  )
}

function StatBox({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-white rounded-lg p-6 text-center shadow-lg">
      <div className="text-3xl font-bold text-brandBlack pb-2">{value}</div>
      <div className="text-sm text-gray-700">{label}</div>
    </div>
  )
}
