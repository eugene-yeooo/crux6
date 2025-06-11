import { useState } from 'react'
import Select from 'react-select'
import SubmitButton from './SubmitButton'

export default function AddCave() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formState, setFormState] = useState({
    title: '',
    caveName: '',
    caveDate: '',
    companions: '',
    location: '',
    technicalStyle: [''],
    routeStyle: 'throughTrip',
    duration: '',
    tripNotes: '',
  })

  const [mediaFiles, setMediaFiles] = useState<File[]>([])

  const techStyleOptions = [
  { value: 'SRT', label: 'SRT' },
  { value: 'Pull-through', label: 'Pull-through' },
  { value: 'Cave Dive', label: 'Cave Dive' },
  { value: 'Non-technical', label: 'Non-technical' },
]

  const labelStyle = 'block mb-1 font-medium'
  const inputStyle = 'w-full p-2 border rounded-md'

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Your submit logic here
    } catch (error) {
      console.error('Submit error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-white rounded-xl shadow-md p-6 max-w-3xl mx-10 mb-6">
      <h1 className="text-2xl font-bold text-brandBlack text-center mb-6">Log a Cave</h1>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="title" className={labelStyle}>Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formState.title}
              onChange={handleChange}
              className={inputStyle}
              placeholder="For multiple trips with the same objective"
            />
          </div>

          <div>
            <label htmlFor="caveName" className={labelStyle}>Cave Name</label>
            <input
              type="text"
              id="caveName"
              name="caveName"
              value={formState.caveName}
              onChange={handleChange}
              className={inputStyle}
              placeholder="e.g. Harwoods Hole"
            />
          </div>

          <div>
            <label htmlFor="caveDate" className={labelStyle}>Date</label>
            <input
              type="date"
              id="caveDate"
              name="caveDate"
              value={formState.caveDate}
              onChange={handleChange}
              className={inputStyle}
            />
          </div>

          <div>
            <label htmlFor="location" className={labelStyle}>Location</label>
            <input
              type="text"
              id="location"
              name="location"
              value={formState.location}
              onChange={handleChange}
              className={inputStyle}
              placeholder="e.g. Golden Bay"
            />
          </div>

          <div>
            <label htmlFor="technicalStyle" className={labelStyle}>Technical Style</label>
            <Select
              isMulti
              inputId="technicalStyle"
              name="technicalStyle"
              options={techStyleOptions}
              className="basic-multi-select"
              classNamePrefix="select"
              value={techStyleOptions.filter(opt => formState.technicalStyle.includes(opt.value))}
              onChange={(selectedOptions) =>
                setFormState(prev => ({
                  ...prev,
                  technicalStyle: selectedOptions.map(opt => opt.value),
                }))
              }
            />

          </div>

          <div>
            <label htmlFor="routeStyle" className={labelStyle}>Route Style</label>
            <select
              id="routeStyle"
              name="routeStyle"
              value={formState.routeStyle}
              onChange={handleChange}
              className={inputStyle}
            >
              <option value="throughTrip">Through-trip</option>
              <option value="inOut">In/Out</option>
            </select>
          </div>

          <div>
            <label htmlFor="companions" className={labelStyle}>Trip Members</label>
            <input
              type="text"
              id="companions"
              name="companions"
              value={formState.companions}
              onChange={handleChange}
              className={inputStyle}
              placeholder="Names or group"
            />
          </div>

          <div>
            <label htmlFor="duration" className={labelStyle}>Duration (hours)</label>
            <input
              type="number"
              id="duration"
              name="duration"
              value={formState.duration}
              onChange={handleChange}
              className={inputStyle}
              placeholder="e.g. 5"
            />
          </div>
        </div>

        <div>
          <label htmlFor="tripNotes" className={labelStyle}>Trip Notes</label>
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

        <div>
          <label htmlFor="media" className={labelStyle}>Upload Media</label>
          <input
            type="file"
            id="media"
            name="media"
            accept="image/*,video/*"
            multiple
            onChange={(e) => {
              if (e.target.files) {
                setMediaFiles(Array.from(e.target.files))
              }
            }}
            className="w-full p-2 border rounded-md bg-white"
          />

          {mediaFiles.length > 0 && (
            <div className="flex flex-wrap gap-3 mt-4">
              {mediaFiles.map((file, idx) => (
                <div
                  key={idx}
                  className="w-24 h-24 border rounded overflow-hidden bg-gray-100 flex items-center justify-center"
                >
                  {file.type.startsWith('image') ? (
                    <img
                      src={URL.createObjectURL(file)}
                      alt={`media-${idx}`}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <video className="w-full h-full object-cover" controls muted>
                      <source src={URL.createObjectURL(file)} />
                    </video>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="text-center my-6">
          <SubmitButton loading={isSubmitting}>Log Cave</SubmitButton>
        </div>
      </form>
    </div>
  )
}
