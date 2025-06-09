export default function AdventureFilterNav({
  selected,
  onChange,
}: {
  selected: string
  onChange: (filter: string) => void
}) {
  const filters = ['all', 'climb', 'canyon', 'cave', 'dive']

  return (
    <div>
      {filters.map((type) => (
        <button
          key={type}
          onClick={() => onChange(type)}
          disabled={selected === type}
        >
          {type === 'all'
            ? 'All'
            : type.charAt(0).toUpperCase() + type.slice(1) + 's'}
        </button>
      ))}
    </div>
  )
}
