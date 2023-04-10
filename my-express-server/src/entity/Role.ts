import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { User } from "./User";

@Entity()
export class Role{
    @PrimaryGeneratedColumn()
    idRole: number;

    @Column()
    nameRole: string;

    @OneToMany(() => User, (user) => user.role, {cascade: true, eager: true})
    users : User[];
}