import { TestDTO } from "src/dto/Test.dto";
import { Group } from "src/entities/group.entity";
import { Test } from "src/entities/Test.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Test)
export class TestsRepository extends Repository<Test>{
    async createTest(testDTO: TestDTO): Promise<Test> {
        const { name, order, cost, normalRange, defaultValue, groupName, subGroupName, unit, upperRange, lowerRange, interpretation, specification } = testDTO;

        console.log(testDTO);
        const group = await Group.findOne({ name: groupName });
        const subGroup = await Group.findOne({ where: { name: subGroupName, is_sub_group: true } });

        const test = new Test();
        test.name = name;
        test.order = order;
        test.cost = cost;
        test.normal_range = normalRange;
        test.default_value = defaultValue;
        test.group = group;
        test.sub_group = subGroup;
        test.unit = unit;
        test.upper_range = upperRange;
        test.lower_range = lowerRange;
        test.interpretation = interpretation;
        test.specification = specification;
        await test.save();

        return test;
    }

    async updateTest(id: number, testDTO: TestDTO): Promise<Test> {
        const { name, order, cost, normalRange, defaultValue, groupName, subGroupName, unit, upperRange, lowerRange, interpretation, specification } = testDTO;

        const group = await Group.findOne({ name: groupName });
        const subGroup = await Group.findOne({ where: { name: subGroupName, is_sub_group: true } });

        const test = await Test.findOne({ id });
        test.name = name;
        test.order = order;
        test.cost = cost;
        test.normal_range = normalRange;
        test.default_value = defaultValue;
        test.group = group;
        test.sub_group = subGroup;
        test.unit = unit;
        test.upper_range = upperRange;
        test.lower_range = lowerRange;
        test.interpretation = interpretation;
        test.specification = specification;
        await test.save();

        return test;
    }
}