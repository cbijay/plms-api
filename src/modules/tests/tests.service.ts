import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TestDTO } from 'src/dto/test.dto';
import { Test } from 'src/entities/Test.entity';
import { TestsRepository } from './tests.repository';

@Injectable()
export class TestsService {
    constructor(
        @InjectRepository(TestsRepository)
        private testsRepository: TestsRepository
    ) { }

    async findAll(): Promise<Test[]> {
        return await this.testsRepository.find();
    }

    async findById(id: number): Promise<Test> {
        return await this.testsRepository.createQueryBuilder('tests')
            .where({ id: id })
            .leftJoinAndSelect('tests.group', 'group')
            .leftJoinAndSelect('tests.sub_group', 'subgroup')
            .select(['tests.id', 'tests.name', 'tests.order', 'tests.cost', 'tests.normal_range', 'tests.default_value', 'tests.unit', 'tests.upper_range', 'tests.lower_range', 'tests.interpretation', 'tests.specification'])
            .addSelect('group.name', 'group_name')
            .addSelect('subgroup.name', 'subgroup_name')
            .getRawOne();
        //return await this.testsRepository.findOne({ id });
    }

    async create(TestDTO: TestDTO): Promise<Test> {
        return await this.testsRepository.createTest(TestDTO);
    }

    async update(id: number, TestDTO: TestDTO): Promise<Test> {
        return await this.testsRepository.updateTest(id, TestDTO);
    }

    async remove(id: number): Promise<any> {
        await this.testsRepository.delete(id);
        return id;
    }
}
