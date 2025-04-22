import { User } from '@/domain/entities/User'
import UserCard from './UserCard'

interface ListUsersProps {
  users: User[]
}

export const UserList = ({ users }: ListUsersProps) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    {users.map((user) => (
      <UserCard key={user.id} user={user} />
    ))}
  </div>
)
