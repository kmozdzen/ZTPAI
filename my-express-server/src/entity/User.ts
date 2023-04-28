import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToOne, OneToMany, BeforeInsert, Index } from "typeorm";
import { UserDetails } from "./UserDetails";
import { Role } from "./Role";
import { Workout } from "./Workout";
import bcrypt from 'bcryptjs';

@Entity()
export class User{
   
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Index('email_index')
    @Column({
        unique: true
    })
    email: string;

    @Column()
    password: string;
    

    @OneToOne(() => UserDetails, { cascade: true, eager: true})
    @JoinColumn()
    userDetails : UserDetails;

    @ManyToOne(() => Role, (role) => role.users, {onDelete : "CASCADE"})
    role : Role;

    @OneToMany(() => Workout, (workout) => workout.user, {cascade: true})
    workouts : Workout[];

    @BeforeInsert()
    async hashPassword() {
        this.password = await bcrypt.hash(this.password, 12);
    }

    checkIfUnencryptedPasswordIsValid(unencryptedPassword: string) {
        return bcrypt.compareSync(unencryptedPassword, this.password);
    }
}