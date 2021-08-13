import { DoctorDTO } from "src/dto/Doctor.dto";
import { Doctor } from "src/entities/doctor.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Doctor)
export class DoctorRepository extends Repository<Doctor>{
    async createDoctor(DoctorDTO: DoctorDTO): Promise<Doctor> {
        const { name, email, contact, hospitalOrClinic, specialization } = DoctorDTO;

        const doctor = new Doctor();
        doctor.name = name;
        doctor.email = email;
        doctor.contact = contact;
        doctor.hospital_clinic = hospitalOrClinic;
        doctor.specialization = specialization;
        await doctor.save();

        return doctor;
    }

    async updateDoctor(id: number, DoctorDTO: DoctorDTO): Promise<Doctor> {
        const { name, email, contact, hospitalOrClinic, specialization } = DoctorDTO;

        const doctor = await Doctor.findOne({ id });
        doctor.name = name;
        doctor.email = email;
        doctor.contact = contact;
        doctor.hospital_clinic = hospitalOrClinic;
        doctor.specialization = specialization;
        await doctor.save();

        return doctor;
    }
}