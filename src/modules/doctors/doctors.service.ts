import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DoctorDTO } from 'src/dto/Doctor.dto';
import { Doctor } from 'src/entities/doctor.entity';
import { DoctorRepository } from './doctors.repository';

@Injectable()
export class DoctorsService {
    constructor(
        @InjectRepository(DoctorRepository)
        private doctorRepository: DoctorRepository
    ) { }

    async findAll(): Promise<Doctor[]> {
        return await this.doctorRepository.find();
    }

    async findById(id: number): Promise<Doctor> {
        return await this.doctorRepository.findOne({ id });
    }

    async create(doctorDTO: DoctorDTO): Promise<Doctor> {
        return await this.doctorRepository.createDoctor(doctorDTO);
    }

    async update(id: number, doctorDTO: DoctorDTO): Promise<Doctor> {
        return await this.doctorRepository.updateDoctor(id, doctorDTO);
    }

    async remove(id: number): Promise<any> {
        await this.doctorRepository.delete(id);
        return id;
    }
}
