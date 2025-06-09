import { Adventure } from '../../models/models'

export default function AdventureSummaryStats({
  adventures,
}: {
  adventures: Adventure[]
}) {
  const total = adventures.length
  const climbs = adventures.filter((a) => a.type === 'climb')
  const hardest =
    climbs
      .map((c) => c.grade || '')
      .sort()
      .slice(-1)[0] || 'N/A'

  return (
    <div>
      <StatBox label="Total Adventures" value={total.toString()} />
      <StatBox label="Climbs Logged" value={climbs.length.toString()} />
      <StatBox label="Hardest Grade" value={hardest} />
      <StatBox label="Hours Caving" value="5h" />
    </div>
  )
}

function StatBox({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <strong>{value}</strong>
      <div>{label}</div>
    </div>
  )
}
