import { Controller, Body, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { DoctorDTO } from 'src/dto/Doctor.dto';
import { Doctor } from 'src/entities/doctor.entity';
import { DoctorsService } from './doctors.service';

@Controller('doctors')
export class DoctorsController {
    constructor(
        private doctorService: DoctorsService
    ) { }

    @Get()
    findAll(): Promise<Doctor[]> {
        return this.doctorService.findAll();
    }

    @Get(':id')
    findById(@Param('id') id: number): Promise<Doctor> {
        return this.doctorService.findById(id);
    }

    @Post()
    create(@Body() doctorDTO: DoctorDTO): Promise<Doctor> {
        return this.doctorService.create(doctorDTO);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() doctorDTO: DoctorDTO): Promise<Doctor> {
        return this.doctorService.update(id, doctorDTO);
    }

    @Delete(':id')
    remove(@Param('id') id: number): Promise<void> {
        return this.doctorService.remove(id);
    }
}
