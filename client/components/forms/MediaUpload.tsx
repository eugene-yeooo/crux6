interface MediaUploadProps {
  labelStyle: string
  mediaFiles: File[]
  setMediaFiles: (files: File[]) => void
}


export default function MediaUpload( { labelStyle, setMediaFiles, mediaFiles }: MediaUploadProps ) {
  return (
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
  )
}