import { getRepository } from "typeorm";
import { Workout } from "../entity/Workout";
import { AppDataSource } from "../config/database";

export interface IWorkout {
    series: string;
    reps: string;
    weight: string;
    date: Date;
}

export const getWorkout = async (id: number): Promise<Workout | null> => {
    const workoutRepository = AppDataSource.getRepository(Workout);
    const workout = await workoutRepository.findOne({ where: { idWorkout: id } });
    if (!workout) return null;
    return workout;
};

export const createWorkout = async (workoutBody: IWorkout): Promise<Workout> => {
    const workoutRepository = AppDataSource.getRepository(Workout);
    const workout = new Workout();
    
    workout.series = workoutBody.series;
    workout.reps = workoutBody.reps;
    workout.weight = workoutBody.weight;
    workout.date = workoutBody.date;

    return workoutRepository.save(workout);
};