import { Body, Controller, Post } from '@nestjs/common';
import { AuthDTO } from 'src/dto/auth.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService
    ) { }

    @Post('/login')
    login(@Body() authDTO: AuthDTO): Promise<Object> {
        return this.authService.login(authDTO);
    }
}
