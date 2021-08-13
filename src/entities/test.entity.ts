import {
    Entity,
    BaseEntity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne
} from "typeorm";
import { Group } from "./group.entity";

@Entity('tests')
export class Test extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    order: number;

    @Column()
    cost: number;

    @Column()
    normal_range: string;

    @Column()
    default_value: string;

    @ManyToOne(() => Group, group => group.tests, { nullable: false, cascade: ['insert', 'update'] })
    group: Group;

    @ManyToOne(() => Group, group => group.tests, { nullable: true, cascade: ['insert', 'update'] })
    sub_group: Group;

    @Column()
    unit: string;

    @Column()
    upper_range: string;

    @Column()
    lower_range: string;

    @Column({ nullable: true })
    interpretation: string;

    @Column({ nullable: true })
    specification: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}