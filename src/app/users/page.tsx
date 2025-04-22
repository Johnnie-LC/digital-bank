'use client'

import { ErrorInfo } from '@/presentation/components/ErrorInforProps'
import { UserList } from '@/presentation/components/UserList'
import { useUserList } from '@/presentation/hooks/userList'

export default function UserListPage() {
  const { users, loading, error, loadUsers } = useUserList()

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">User List</h1>

      {loading && <p>Loading users...</p>}

      {error && <ErrorInfo error={error} loadUsers={loadUsers} />}

      {!loading && !error && <UserList users={users} />}
    </div>
  )
}
