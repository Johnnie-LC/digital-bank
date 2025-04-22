import { User } from '@/domain/entities/User'
import { UserRepository } from '@/repositories/UserRepository'

const mockUsers: User[] = [
  {
    id: '1',
    name: 'Alice Johnson',
    email: 'alice@example.com',
  },
  {
    id: '2',
    name: 'Bob Smith',
    email: 'bob@example.com',
  },
  {
    id: '3',
    name: 'Charlie Brown',
    email: 'charlie@example.com',
  },
]

export class UserMockRepository implements UserRepository {
  async getUser(id: string): Promise<User> {
    return mockUsers.find((user) => user.id === id)!
  }

  async getAllUsers(): Promise<User[]> {
    return mockUsers
  }
}
