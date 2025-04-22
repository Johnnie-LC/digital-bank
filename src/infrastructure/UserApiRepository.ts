import { User } from '@/domain/entities/User'
import { UserRepository } from '@/repositories/UserRepository'

export class UserApiRepository implements UserRepository {
  async getUser(id: string): Promise<User> {
    const res = await fetch(`/api/users/${id}`)
    return res.json()
  }

  async getAllUsers(): Promise<User[]> {
    const res = await fetch(`/api/users`)
    return res.json()
  }
}
