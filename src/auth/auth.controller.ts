import { Body, Controller, Post, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(@Body() authData: LoginDto) {
    console.log('controller');
    return {
      accessToken: this.authService.login(authData),
    };
  }
}
