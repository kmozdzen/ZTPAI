import {User} from "../entity/User"; 
import {getUsers, createUser, IUser, getUser} from "../repository/UserRepository";
import { Get, Route, Tags, Post, Body, Path } from "tsoa";

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
}