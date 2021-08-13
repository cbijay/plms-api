import { CompanyDTO } from "src/dto/company.dto";
import { Company } from "src/entities/company.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Company)
export class CompanyRepository extends Repository<Company>{
    async createOrUpdate(companyDTO: CompanyDTO): Promise<Company> {
        const { companyName, companyAddress, companyRegNum } = companyDTO;

        let company = await Company.findOne(1);

        if (typeof company === "undefined") {
            company = new Company();
            company.company_name = companyName;
        }

        company.company_name = company.company_name;
        company.company_address = companyAddress;
        company.company_reg_num = companyRegNum;
        await company.save();

        return company;
    }
}