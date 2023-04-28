import {User} from "../entity/User"; 
import {getUsers, createUser, IUser, getUser, updateUser, deleteUser} from "../repository/UserRepository";
import { Get, Route, Tags, Post, Body, Path, Put, Delete } from "tsoa";

@Route("users")
@Tags("User")
export default class UserController {

   @Get("/")
   public async getUsers(): Promise<Array<User>> {
      return getUsers();
   }

   @Post("/")
   public async createUser(@Body() body: IUser): Promise<User> {
      return createUser(body);
   }

   @Get("/:id")
   public async getUser(@Path() id: string): Promise<User | null> {
      return getUser(Number(id));
   }

   @Put("/:id")
   public async updateUser(@Path() id: string, @Body() updatedUser: IUser): Promise<User | null> {
      return updateUser(Number(id), updatedUser);
   }

   @Delete("/:id")
   public async deleteUser(@Path() id: string){
      return deleteUser(Number(id));
   }
}