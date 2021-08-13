import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RoleDTO } from 'src/dto/role.dto';
import { Role } from 'src/entities/role.entity';
import { Not } from 'typeorm';
import { RolesRepository } from './roles.repository';

@Injectable()
export class RolesService {
    constructor(
        @InjectRepository(RolesRepository)
        private rolesRepository: RolesRepository
    ) { }

    async findAll() {
        return await this.rolesRepository.find({ where: { role_name: Not('Admin') } });
    }

    async create(roleDTO: RoleDTO): Promise<Role> {
        return await this.rolesRepository.createRole(roleDTO);
    }

    async update(id: number, roleDTO: RoleDTO): Promise<Role> {
        return await this.rolesRepository.updateRole(id, roleDTO);
    }

    async remove(id: number): Promise<void> {
        await this.rolesRepository.delete(id);
    }
}
