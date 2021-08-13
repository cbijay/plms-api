import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TechnicianDTO } from 'src/dto/technicians.dto';
import { Technician } from 'src/entities/technician.entity';
import { TechnicianRepository } from './technicians.repository'

@Injectable()
export class TechniciansService {
    constructor(
        @InjectRepository(TechnicianRepository)
        private technicianRepository: TechnicianRepository
    ) { }

    async findAll(): Promise<Technician[]> {
        return await this.technicianRepository.find();
    }

    async findById(id: number): Promise<Technician> {
        return await this.technicianRepository.findOne({ id });
    }

    async create(technicianDTO: TechnicianDTO): Promise<Technician> {
        return await this.technicianRepository.createTechnician(technicianDTO);
    }

    async update(id: number, technicianDTO: TechnicianDTO): Promise<Technician> {
        return await this.technicianRepository.updateTechnician(id, technicianDTO);
    }

    async remove(id: number): Promise<any> {
        await this.technicianRepository.delete(id);
        return id;
    }
}
