import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolesGuard } from 'src/guards/roles.guard';
import { AuthController } from './auth.controller';
import { AuthRepository } from './auth.repository';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt-strategy';
import * as dotenv from 'dotenv';

dotenv.config();

@Module({
    imports: [
        PassportModule.register({ defaultStrategy: 'jwt' }),
        JwtModule.register({
            secret: process.env.JWT_SECRET,
            signOptions: {
                expiresIn: 3600
            }
        }),
        TypeOrmModule.forFeature([AuthRepository])
    ],
    controllers: [AuthController],
    providers: [AuthService, JwtStrategy, {
        provide: APP_GUARD,
        useClass: RolesGuard,
    }],
    exports: [AuthService, PassportModule]
})
export class AuthModule { }