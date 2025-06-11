export default function SubmitButton({ loading, children }: { loading?: boolean; children: React.ReactNode }) {
  return (
    <button
      type="submit"
      disabled={loading}
      className="bg-brandBlack text-white font-bold px-6 py-2 rounded hover:bg-brandPrimary hover:text-brandBlack transition"
    >
      {loading ? 'Submitting...' : children}
    </button>
  )
}
