import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDTO } from 'src/dto/user.dto';
import { Role } from 'src/entities/role.entity';
import { User } from 'src/entities/user.entity';
import { Not } from 'typeorm';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UsersRepository)
        private usersRepository: UsersRepository
    ) { }

    async findAll(): Promise<User[]> {
        const role = await Role.findOne({ role_name: "Admin" });

        if (role) {
            return await this.usersRepository.createQueryBuilder('users')
                .where({ role: Not(role.id) })
                .leftJoinAndSelect('users.role', 'role')
                .select(['users.id', 'users.name', 'users.email', 'users.username'])
                .addSelect('role.role_name', 'role_name')
                .getRawMany();
        }

        return await this.usersRepository.createQueryBuilder('users')
            .leftJoinAndSelect('users.role', 'role')
            .select(['users.id', 'users.name', 'users.email', 'users.username'])
            .addSelect('role.role_name', 'role_name')
            .getRawMany();
    }

    async findById(id: number): Promise<User> {
        return await this.usersRepository.createQueryBuilder('users')
            .where({ id: id })
            .leftJoinAndSelect('users.role', 'role')
            .select(['users.id', 'users.name', 'users.email', 'users.username'])
            .addSelect('role.role_name', 'role_name')
            .getRawOne();
    }

    async create(userDTO: UserDTO): Promise<User> {
        return await this.usersRepository.createUser(userDTO);
    }

    async update(id: number, userDTO: UserDTO): Promise<User> {
        return await this.usersRepository.updateUser(id, userDTO);
    }

    async remove(id: number): Promise<any> {
        await this.usersRepository.delete(id);
        return id;
    }
}
