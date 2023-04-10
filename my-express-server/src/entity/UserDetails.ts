import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class UserDetails{
    @PrimaryGeneratedColumn()
    idUserDetails: number;

    @Column()
    name: string;

    @Column()
    surname: string;
}