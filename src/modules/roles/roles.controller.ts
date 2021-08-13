import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { RoleDTO } from 'src/dto/role.dto';
import { Role } from 'src/entities/role.entity';
import { RolesService } from './roles.service';

@Controller('roles')
export class RolesController {
    constructor(
        private rolesService: RolesService
    ) { }

    @Get()
    findAll() : Promise<Role[]> {
        return this.rolesService.findAll();
    }

    @Post()
    create(@Body() roleDTO: RoleDTO): Promise<Role>{
        return this.rolesService.create(roleDTO);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() roleDTO: RoleDTO): Promise<Role>{
        return this.rolesService.update(id, roleDTO);
    }

    @Delete(':id')
    remove(@Param('id') id: number): Promise<void>{
        return this.rolesService.remove(id);
    }
}
