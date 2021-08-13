import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyController } from './company.controller';
import { CompanyRepository } from './company.repository';
import { companyService } from './company.service';

@Module({
  imports: [TypeOrmModule.forFeature([CompanyRepository])],
  controllers: [CompanyController],
  providers: [companyService]
})
export class CompanyModule {}
