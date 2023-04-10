import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToOne } from "typeorm";
import { User } from "./User";
import { Exercise } from "./Exercise"


@Entity()
export class Workout{
   
    @PrimaryGeneratedColumn()
    idWorkout: number;

    @Column()
    series: string;

    @Column()
    reps: string;

    @Column()
    weight: string;

    @Column()
    date: Date;

    @ManyToOne(() => User, (user) => user.workouts, {onDelete : "CASCADE"})
    user : User;

    @ManyToOne(() => Exercise, (exercise) => exercise.workouts, {onDelete : "CASCADE"})
    exercise : Exercise;
}