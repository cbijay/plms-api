import { EntityRepository, Repository } from "typeorm";
import { Technician } from "src/entities/technician.entity";
import { TechnicianDTO } from "src/dto/technicians.dto";
import { Role } from "src/entities/role.entity";
import * as bcrypt from 'bcrypt'
import { UsersRepository } from "../users/users.repository";
import { User } from "src/entities/user.entity";

@EntityRepository(Technician)
export class TechnicianRepository extends Repository<Technician>{
    async createTechnician(technicianDTO: TechnicianDTO): Promise<Technician> {
        const { name, licenseNumber, specialization } = technicianDTO;

        const technician = new Technician();
        technician.name = name;
        technician.license_number = licenseNumber;
        technician.specialization = specialization;
        await technician.save();

        return technician;
    }

    async updateTechnician(id: number, technicianDTO: TechnicianDTO): Promise<Technician> {
        const { name, licenseNumber, specialization } = technicianDTO;

        const technician = await Technician.findOne({ id });
        technician.name = name;
        technician.license_number = licenseNumber;
        technician.specialization = specialization;
        await technician.save();

        return technician;
    }
}