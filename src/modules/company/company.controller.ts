import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CompanyDTO } from 'src/dto/company.dto';
import { Company } from 'src/entities/company.entity';
import { companyService } from './company.service';

@Controller('company')
export class CompanyController {
    constructor(
        private companyService: companyService
    ) { }

    @Get()
    findById(): Promise<Company> {
        return this.companyService.findById();
    }

    @Post()
    createOrUpdate(@Body() companyDTO: CompanyDTO): Promise<Company> {
        return this.companyService.createOrUpdate(companyDTO);
    }
}
