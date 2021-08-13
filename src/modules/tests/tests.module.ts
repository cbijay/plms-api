import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestsController } from './tests.controller';
import { TestsRepository } from './tests.repository';
import { TestsService } from './tests.service';

@Module({
    imports: [TypeOrmModule.forFeature([TestsRepository])],
    controllers: [TestsController],
    providers: [TestsService]
})
export class TestsModule { }