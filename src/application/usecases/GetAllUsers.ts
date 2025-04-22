import { User } from '@/domain/entities/User'
import { UserRepository } from '@/repositories/UserRepository'

export class GetAllUsers {
  constructor(private userRepo: UserRepository) {}

  async execute(): Promise<User[]> {
    return this.userRepo.getAllUsers()
  }
}
