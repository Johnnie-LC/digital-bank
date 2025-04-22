import { User } from '@/domain/entities/User'

interface UserCardProps {
  user: User
}

export default function UserCard({ user }: UserCardProps) {
  return (
    <div className="border rounded-lg shadow-sm p-4 hover:shadow-md transition">
      <h2 className="text-lg font-semibold">{user.name}</h2>
      <p className="text-white-600">{user.email}</p>
    </div>
  )
}
