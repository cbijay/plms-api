import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CompanyDTO } from 'src/dto/company.dto';
import { Company } from 'src/entities/company.entity';
import { CompanyRepository } from './company.repository';

@Injectable()
export class companyService {
    constructor(
        @InjectRepository(CompanyRepository)
        private companyRepository: CompanyRepository
    ) { }

    async findById(): Promise<Company> {
        return await this.companyRepository.findOne(1, { select: ['company_name', 'company_address', 'company_reg_num'] });
    }

    async createOrUpdate(companyDTO: CompanyDTO): Promise<Company> {
        return await this.companyRepository.createOrUpdate(companyDTO);
    }
}
