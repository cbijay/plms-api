import { GroupDTO } from "src/dto/Group.dto";
import { Group } from "src/entities/group.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Group)
export class GroupRepository extends Repository<Group>{
    async createGroup(groupDTO: GroupDTO): Promise<Group> {
        const { name, order, cost, isSubGroup, interpretation, specification } = groupDTO;

        const group = new Group();
        group.name = name;
        group.order = order;
        group.cost = cost;
        group.is_sub_group = isSubGroup;
        group.interpretation = interpretation;
        group.specification = specification;
        await group.save();

        return group;
    }

    async updateGroup(id: number, groupDTO: GroupDTO): Promise<Group> {
        const { name, order, cost, isSubGroup, interpretation, specification } = groupDTO;

        const group = await Group.findOne({ id });
        group.name = name;
        group.order = order;
        group.cost = cost;
        group.is_sub_group = isSubGroup;
        group.interpretation = interpretation;
        group.specification = specification;

        await group.save();

        return group;
    }
}