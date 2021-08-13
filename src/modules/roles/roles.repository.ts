import { EntityRepository, Repository } from "typeorm";
import { Role } from "src/entities/role.entity";
import { RoleDTO } from "src/dto/role.dto";

@EntityRepository(Role)
export class RolesRepository extends Repository<Role>{
    async createRole(roleDTO: RoleDTO): Promise<Role> {
        const { roleName } = roleDTO;

        const role = new Role();
        role.role_name = roleName;        
        await role.save();

        return role;
    }

    async updateRole(id: number, roleDTO: RoleDTO): Promise<Role>{
        const { roleName } = roleDTO;
         
        const role = await Role.findOne({ id });
        role.role_name = roleName;
        await role.save();

        return role;        
    }
}