export default function AdventureFilterNav({
  selected,
  onChange,
}: {
  selected: string
  onChange: (filter: string) => void
}) {
  const filters = ['all', 'climb', 'canyon', 'cave', 'dive']

  return (
    <div className="flex gap-0 flex-wrap justify-center my-4 bg-white shadow-lg rounded-lg">
      {filters.map((type) => {
        const label =
          type === 'all'
            ? 'All'
            : type.charAt(0).toUpperCase() + type.slice(1) + 's'

        const isActive = selected === type

        return (
          <button
            key={type}
            onClick={() => onChange(type)}
            disabled={isActive}
            className={`px-16 py-2 my-3 mx-1 mx-0 text-sm font-semibold rounded transition 
              ${
                isActive
                  ? 'bg-brandPrimary text-brandBlack cursor-default'
                  : 'bg-white text-brandBlack hover:bg-brandBlack hover:text-brandPrimary'
              }`}
          >
            {label}
          </button>
        )
      })}
    </div>
  )
}
