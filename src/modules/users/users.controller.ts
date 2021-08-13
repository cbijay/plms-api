import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserDTO } from 'src/dto/user.dto';
import { User } from 'src/entities/user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(
        private usersService: UsersService
    ) { }

    @Get()
    findAll(): Promise<User[]> {
        return this.usersService.findAll();
    }

    @Get(':id')
    findById(@Param('id') id: number): Promise<User> {
        return this.usersService.findById(id);
    }

    @Post()
    create(@Body() userDTO: UserDTO): Promise<User> {
        return this.usersService.create(userDTO);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() userDTO: UserDTO): Promise<User> {
        return this.usersService.update(id, userDTO);
    }

    @Delete(':id')
    remove(@Param('id') id: number): Promise<void> {
        return this.usersService.remove(id);
    }
}
