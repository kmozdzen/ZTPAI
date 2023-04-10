import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { UserDetails } from "./UserDetails";
import { Role } from "./Role";
import { Workout } from "./Workout";

@Entity()
export class User{
   
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    password: string;

    @OneToOne(() => UserDetails, { cascade: true, eager: true})
    @JoinColumn()
    userDetails : UserDetails;

    @ManyToOne(() => Role, (role) => role.users, {onDelete : "CASCADE"})
    role : Role;

    @OneToMany(() => Workout, (workout) => workout.user, {cascade: true, eager: true})
    workouts : Workout[];
}