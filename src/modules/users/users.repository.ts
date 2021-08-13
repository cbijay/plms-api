import { UserDTO } from "src/dto/user.dto";
import { EntityRepository, Repository } from "typeorm";
import * as bcrypt from 'bcrypt';
import { User } from "src/entities/user.entity";
import { Role } from "src/entities/role.entity";

@EntityRepository(User)
export class UsersRepository extends Repository<User>{
    async createUser(userDTO: UserDTO): Promise<User> {
        const { name, email, username, password, roleName } = userDTO;

        console.log(roleName);

        const role = await Role.findOne({ role_name: roleName });
        const salt = await bcrypt.genSalt();

        const user = new User();
        user.name = name;
        user.email = email;
        user.username = username;
        user.password = await this.hashPassword(password, salt);
        user.salt = salt;
        user.role = role;
        await user.save();

        return user;
    }

    async updateUser(id: number, userDTO: UserDTO): Promise<User> {
        const { name, email, username, password, roleName } = userDTO;

        const role = await Role.findOne({ role_name: roleName });
        const salt = await bcrypt.genSalt();

        const user = await User.findOne({ id });
        user.name = name;
        user.email = email;
        user.username = username;

        if (password) {
            user.password = await this.hashPassword(password, salt);
        }

        user.password = user.password;
        user.salt = salt;
        user.role = role;
        await user.save();

        return user;
    }

    async hashPassword(password: string, salt: string): Promise<string> {
        return await bcrypt.hash(password, salt);
    }
}