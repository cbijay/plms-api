import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TechniciansController } from './technicians.controller';
import { TechnicianRepository } from './technicians.repository';
import { TechniciansService } from './technicians.service';

@Module({
  imports: [TypeOrmModule.forFeature([TechnicianRepository])],
  controllers: [TechniciansController],
  providers: [TechniciansService]
})
export class TechniciansModule { }
