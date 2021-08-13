import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthDTO } from 'src/dto/auth.dto';
import { JWTPayload } from 'src/dto/jwt-payload.dto';
import { Role } from 'src/entities/role.entity';
import { AuthRepository } from './auth.repository';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(AuthRepository)
        private readonly authRepository: AuthRepository,
        private readonly jwtService: JwtService
    ) { }

    async login(authDTO: AuthDTO): Promise<Object> {
        const user = await this.authRepository.validateUserPassword(authDTO);

        if (!user) {
            throw new UnauthorizedException('Invalid credentials!');
        }

        const { id, name, email, username, role: { role_name } = {} } = user;
        const role = role_name;

        const payload: JWTPayload = { username, role };
        const token = await this.jwtService.sign(payload);

        return { id, name, email, username, role, token };
    }
}
