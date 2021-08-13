import {
    Entity,
    BaseEntity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany
} from "typeorm";
import { Test } from "./Test.entity";

@Entity('groups')
export class Group extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    order: number;

    @Column()
    cost: number;

    @Column({ type: 'boolean', default: false })
    is_sub_group: boolean;

    @Column({ nullable: true })
    interpretation: string;

    @Column({ nullable: true })
    specification: string;

    @OneToMany(() => Test, test => test.group)
    tests: Test[];

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}