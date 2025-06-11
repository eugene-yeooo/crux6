
export default function LogCard({ log, variant = 'default' }) {
  return (
    <div className="rounded-lg shadow p-4 bg-white">
      <h3 className="text-xl font-semibold">{log.name}</h3>
      <p className="text-sm text-gray-500">{log.date}</p>
      <p className="text-sm">{log.sport}</p>
      {/* sport-specific rendering here */}
    </div>
  )
}
