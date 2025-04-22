import { User } from '@/domain/entities/User'

export interface UserRepository {
  getUser(id: string): Promise<User>
  getAllUsers(): Promise<User[]>
}
