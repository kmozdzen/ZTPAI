import {Workout} from "../entity/Workout"; 
import { Get, Route, Tags, Post, Body, Path, Put, Delete } from "tsoa";
import { IWorkout, getWorkout, createWorkout, deleteWorkout, updateWorkout } from "../repository/WorkoutRepository";

@Route("users")
@Tags("User")
export default class UserController {

   @Get("/:id")
   public async getWorkout(@Path() id: string): Promise<Workout | null> {
      return getWorkout(Number(id));
   }

   @Post("/")
   public async createWorkout(@Body() body: IWorkout): Promise<Workout> {
      return createWorkout(body);
   }

   @Put("/:id")
   public async updateWorkout(@Path() id: string, @Body() updatedWorkout: IWorkout): Promise<Workout | null> {
      return updateWorkout(Number(id), updatedWorkout);
   }

   @Delete("/:id")
   public async deleteWorkout(@Path() id: string){
      return deleteWorkout(Number(id));
   }
}