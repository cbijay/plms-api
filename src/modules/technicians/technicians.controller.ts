import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TechnicianDTO } from 'src/dto/technicians.dto';
import { Technician } from 'src/entities/technician.entity';
import { TechniciansService } from './technicians.service';

@Controller('technicians')
export class TechniciansController {
    constructor(
        private techniciansService: TechniciansService
    ) { }

    @Get()
    findAll(): Promise<Technician[]> {
        return this.techniciansService.findAll();
    }

    @Get(':id')
    findById(@Param('id') id: number): Promise<Technician> {
        return this.techniciansService.findById(id);
    }

    @Post()
    create(@Body() technicianDTO: TechnicianDTO): Promise<Technician> {
        return this.techniciansService.create(technicianDTO);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() technicianDTO: TechnicianDTO): Promise<Technician> {
        return this.techniciansService.update(id, technicianDTO);
    }

    @Delete(':id')
    remove(@Param('id') id: number): Promise<void> {
        return this.techniciansService.remove(id);
    }
}
