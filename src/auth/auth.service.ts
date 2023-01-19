import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { LoginDto } from './dto/login.dto';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  login(data: LoginDto) {
    // Se existe
    const userAlreadyExists = this.usersService.findOneByEmail(data.email);
    if (!userAlreadyExists) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    // Se a senha é valida
    if (data.password !== userAlreadyExists.password) {
      throw new HttpException('Password invalid', HttpStatus.NOT_FOUND);
    }

    // Criar token e retornar
    const payload = { user_email: userAlreadyExists.email };

    const token = jwt.sign(payload, 'ladhklakjdlkadj', {
      expiresIn: '10m',
    });

    return token;
  }
}
