import { Module } from '@nestjs/common';
import { DoctorsService } from './doctors.service';
import { DoctorsController } from './doctors.controller';
import { DoctorRepository } from './doctors.repository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([DoctorRepository])],
  controllers: [DoctorsController],
  providers: [DoctorsService]
})
export class DoctorsModule { }
