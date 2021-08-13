import { Controller, Body, Get, Post, Put, Delete, Param } from '@nestjs/common';
import { TestDTO } from 'src/dto/test.dto';
import { Test } from 'src/entities/Test.entity';
import { TestsService } from './tests.service';


@Controller('tests')
export class TestsController {
    constructor(
        private testsService: TestsService
    ) { }

    @Get()
    findAll(): Promise<Test[]> {
        return this.testsService.findAll();
    }

    @Get(':id')
    findById(@Param('id') id: number): Promise<Test> {
        return this.testsService.findById(id);
    }

    @Post()
    create(@Body() TestDTO: TestDTO): Promise<Test> {
        return this.testsService.create(TestDTO);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() TestDTO: TestDTO): Promise<Test> {
        return this.testsService.update(id, TestDTO);
    }

    @Delete(':id')
    remove(@Param('id') id: number): Promise<void> {
        return this.testsService.remove(id);
    }
}
