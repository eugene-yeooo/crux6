import { useState } from 'react'

export default function AddCave() {
  const [formState, setFormState] = useState({
    caveName: '',
    caveDate: '',
    companions: '',
    location: '',
    routeStyle: 'throughTrip',
    duration: '',
    tripNotes: '',
  })

  const labelStyle = 'block mb-1 font-medium'

  const handleChange = (
    evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = evt.target
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Cave log:', formState)
    // Add submission logic here
  }

  return (
    <div className="bg-white rounded-xl shadow-md p-6 max-w-3xl mx-10 mb-6">
      <h3 className="text-2xl font-semibold text-brandBlack text-center mb-6">
        Log a Cave
      </h3>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="caveName" className={labelStyle}>
            Cave Name
          </label>
          <input
            type="text"
            id="caveName"
            name="caveName"
            value={formState.caveName}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            placeholder="Cave name"
          />
        </div>

        <div>
          <label htmlFor="caveDate" className={labelStyle}>
            Date
          </label>
          <input
            type="date"
            id="caveDate"
            name="caveDate"
            value={formState.caveDate}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />
        </div>

        <div>
          <label htmlFor="companions" className={labelStyle}>
            Trip Companions
          </label>
          <input
            type="text"
            id="companions"
            name="companions"
            value={formState.companions}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            placeholder="Names or group"
          />
        </div>

        <div>
          <label htmlFor="location" className={labelStyle}>
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formState.location}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            placeholder="e.g. Three Fingers Cave"
          />
        </div>

        <div>
          <label htmlFor="routeStyle" className={labelStyle}>
            Route Style
          </label>
          <select
            id="routeStyle"
            name="routeStyle"
            value={formState.routeStyle}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          >
            <option value="throughTrip">Through-trip</option>
            <option value="inOut">In/Out</option>
          </select>
        </div>

        <div>
          <label htmlFor="duration" className={labelStyle}>
            Duration (hours)
          </label>
          <input
            type="number"
            id="duration"
            name="duration"
            value={formState.duration}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            placeholder="e.g. 5"
          />
        </div>

        <div>
          <label htmlFor="tripNotes" className={labelStyle}>
            Trip Notes
          </label>
          <textarea
            id="tripNotes"
            name="tripNotes"
            rows={4}
            value={formState.tripNotes}
            onChange={handleChange}
            className="w-full p-2 border rounded-md resize-none"
            placeholder="Route description, entrance name, SRT, etc."
          />
        </div>

        <div className="text-center mt-6">
          <button
            type="submit"
            className="bg-brandBlack text-white px-6 py-2 rounded hover:bg-brandPrimary hover:text-brandBlack transition"
          >
            Log Cave
          </button>
        </div>
      </form>
    </div>
  )
}
