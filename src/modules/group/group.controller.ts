import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { GroupDTO } from 'src/dto/Group.dto';
import { Group } from 'src/entities/group.entity';
import { GroupService } from './group.service';

@Controller('group')
export class GroupController {
    constructor(
        private groupService: GroupService
    ) { }

    @Get()
    findAll(): Promise<Group[]> {
        return this.groupService.findAll();
    }

    @Get('only')
    findGroupsOnly(): Promise<Group[]> {
        return this.groupService.findGroupsOnly();
    }

    @Get('sub')
    findSubGroups(): Promise<Group[]> {
        return this.groupService.findSubGroups();
    }

    @Get(':id')
    findById(@Param('id') id: number): Promise<Group> {
        return this.groupService.findById(id);
    }

    @Post()
    create(@Body() groupDTO: GroupDTO): Promise<Group> {
        return this.groupService.create(groupDTO);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() groupDTO: GroupDTO): Promise<Group> {
        return this.groupService.update(id, groupDTO);
    }

    @Delete(':id')
    remove(@Param('id') id: number): Promise<void> {
        return this.groupService.remove(id);
    }
}
