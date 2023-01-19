import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  // In Memory DB
  users = [];

  create(createUserDto: CreateUserDto) {
    this.users.push(createUserDto);
  }

  findAll() {
    return this.users;
  }

  findOneByEmail(email: string) {
    return this.users.find((user) => user.email === email);
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
