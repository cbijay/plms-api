import { User } from "src/entities/user.entity";
import { EntityRepository, Repository } from "typeorm";
import { AuthDTO } from "src/dto/auth.dto";

@EntityRepository(User)
export class AuthRepository extends Repository<User>{
    async validateUserPassword(authDTO: AuthDTO): Promise<User> {
        const { username, password } = authDTO;
        const user = await User.findOne({ username });

        if (user && await user.validatePassword(password)) {
            return user;
        }

        return null;
    }
}