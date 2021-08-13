import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GroupDTO } from 'src/dto/Group.dto';
import { Group } from 'src/entities/group.entity';
import { GroupRepository } from './group.repository';

@Injectable()
export class GroupService {
    constructor(
        @InjectRepository(GroupRepository)
        private groupRepository: GroupRepository
    ) { }

    async findAll(): Promise<Group[]> {
        return await this.groupRepository.find();
    }

    async findGroupsOnly(): Promise<Group[]> {
        return await this.groupRepository.find({ where: { is_sub_group: false } });
    }

    async findSubGroups(): Promise<Group[]> {
        return await this.groupRepository.find({ where: { is_sub_group: true } });
    }

    async findById(id: number): Promise<Group> {
        return await this.groupRepository.findOne({ id });
    }

    async create(groupDTO: GroupDTO): Promise<Group> {
        return await this.groupRepository.createGroup(groupDTO);
    }

    async update(id: number, groupDTO: GroupDTO): Promise<Group> {
        return await this.groupRepository.updateGroup(id, groupDTO);
    }

    async remove(id: number): Promise<any> {
        await this.groupRepository.delete(id);
        return id;
    }
}
