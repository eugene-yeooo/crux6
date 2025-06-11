import { Log } from '../../models/models'

export default function LogSummaryStats({
  logs,
}: {
  logs: Log[]
}) {
  const total = logs.length
  const canyons = logs.filter((l) => l.type === 'canyon')
  const climbs = logs.filter((l) => l.type === 'climb')
  const hardest =
    climbs
      .map((c) => c.grade || '')
      .sort()
      .slice(-1)[0] || 'N/A'

  return (
    <div className="p- max-w-4xl mx-auto mb-6">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <StatBox label="Total Sends" value={String(total)} />
        <StatBox label="Distance Climbed" value="12.6km" />
        <StatBox label="Canyons Logged" value={String(canyons.length)} />
        <StatBox label="Hours Caving" value="592" />
      </div>
    </div>
  )
}

function StatBox({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-white rounded-lg p-6 text-center shadow-lg">
      <div className="text-3xl font-bold text-brandBlack pb-2">{value}</div>
      <div className="text-sm text-gray-700 font-semibold">{label}</div>
    </div>
  )
}
