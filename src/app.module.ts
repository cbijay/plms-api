import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { CompanyModule } from './modules/company/company.module';
import { GroupModule } from './modules/group/group.module';
import { DoctorsModule } from './modules/doctors/doctors.module';
import { TechniciansModule } from './modules/technicians/technicians.module';
import { TestsModule } from './modules/tests/tests.module';
import { PatientsModule } from './modules/patients/patients.module';
import { SamplesModule } from './modules/samples/samples.module';
import { ReportsModule } from './modules/reports/reports.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dbConfig } from './config/db.config';
import { RolesModule } from './modules/roles/roles.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(dbConfig),
    AuthModule,
    UsersModule,
    CompanyModule,
    GroupModule,
    TestsModule,
    DoctorsModule,
    TechniciansModule,
    PatientsModule,
    SamplesModule,
    ReportsModule,
    RolesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
