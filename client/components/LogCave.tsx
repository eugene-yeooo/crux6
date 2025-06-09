// import { useAddCave } from '../hooks/useFruits.ts'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useState } from 'react'

export default function AddCave() {
  const [formState, setFormState] = useState({})

  const handleChange = (
    evt: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = evt.target
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <div>
      <h3 className="flex items-center justify-center py-6 mb-6">Log A Cave</h3>

      <form>
        <label htmlFor="caveName" className="mb-10">
          Cave name
        </label>
        <input
          type="text"
          id="caveName"
          name="caveName"
          placeholder="Cave name"
          onChange={handleChange}
          value={formState.name}
        />
        <br />

        <label htmlFor="caveDate" className="label">
          Date
        </label>
        <input
          type="date"
          id="caveDate"
          name="caveName"
          placeholder="Cave name"
          onChange={handleChange}
          value={formState.date}
        />
        <br />

        <label htmlFor="caveDate" className="label">
          Trip companions
        </label>
        <input
          type="text"
          id="companions"
          name="companions"
          placeholder=""
          onChange={handleChange}
          value={formState.companions}
        />
        <br />

        <label htmlFor="location" className="label">
          Location
        </label>
        <input
          type="text"
          id="location"
          name="location"
          placeholder=""
          onChange={handleChange}
          value={formState.location}
        />
        <br />

        <label htmlFor="routeStyle" className="label">
          Route style
        </label>
        <select
          id="routeStyle"
          name="routeStyle"
          value={formState.routeStyle}
          onChange={handleChange}
        >
          <option value="throughTrip">Through-trip</option>
          <option value="inOut">In/Out</option>
        </select>
        <br />

        <label htmlFor="duration" className="label">
          Duration
        </label>
        <input
          type="number"
          id="duration"
          name="duration"
          placeholder="i.e hours"
          onChange={handleChange}
          value={formState.duration}
        />
        <br />

        <label htmlFor="tripNotes" className="label">
          Trip notes
        </label>
        <textarea
          rows={5}
          id="tripNotes"
          name="tripNotes"
          placeholder="e.g. route description, entrance name, SRT(?), number of pitches, notes for future trips, etc"
          onChange={handleChange}
          value={formState.tripNotes}
        />

        <br />
        <button>Log Cave</button>
      </form>
    </div>
  )
}
