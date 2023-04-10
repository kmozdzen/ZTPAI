import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Workout } from "./Workout";

@Entity()
export class Exercise{
    @PrimaryGeneratedColumn()
    idExercise: number;

    @Column()
    nameExercise: string;

    @Column()
    muscle: string;

    @Column()
    equipment: string;

    @Column()
    difficulty: string;

    @Column()
    instructions: string;

    @OneToMany(() => Workout, (workout) => workout.exercise, {cascade: true, eager: true})
    workouts : Workout[];
}