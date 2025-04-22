import { useEffect, useState } from 'react'
import { GetAllUsers } from '@/application/usecases/GetAllUsers'
import { UserMockRepository } from '@/infrastructure/UserMockRepository'
import { User } from '@/domain/entities/User'

export const useUserList = () => {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  const loadUsers = async () => {
    const useCase = new GetAllUsers(new UserMockRepository())
    setLoading(true)
    setError(null)

    try {
      const result = await useCase.execute()
      setUsers(result)
    } catch (err) {
      console.error('❌ Failed to load users:', err)
      setError('Failed to load users. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadUsers()
  }, [])

  return { users, loading, error, loadUsers }
}
