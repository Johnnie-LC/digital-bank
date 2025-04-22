interface ErrorInfoProps {
  error: string
  loadUsers: () => Promise<void>
}

export const ErrorInfo = ({ error, loadUsers }: ErrorInfoProps) => (
  <div className="mb-4 text-red-500">
    <p>{error}</p>
    <button
      className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      onClick={loadUsers}
    >
      Retry
    </button>
  </div>
)
