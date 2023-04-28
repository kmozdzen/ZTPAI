import { getRepository } from "typeorm";
import { User } from "../entity/User";
import { AppDataSource } from "../config/database";

export interface IUser {
    email: string;
    password: string;
  }

export const getUsers = async (): Promise<Array<User>> => {
    const userRepository = AppDataSource.getRepository(User);
    return userRepository.find();
  };
  
export const createUser = async (userBody: IUser): Promise<User> => {
  const userRepository = AppDataSource.getRepository(User);
  const user = new User();
  
  user.email = userBody.email;
  user.password = userBody.password;
  
  return userRepository.save(user);
};

export const getUser = async (id: number): Promise<User | null> => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOne({ where: { id: id } });
  if (!user) return null;
  return user;
};

export const getUserByEmail = async (email: string): Promise<User | null> => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOne({ where: { email: email } });
  if (!user) return null;
  return user;
};

export const updateUser =async (id: number, updatedUser: IUser): Promise<User | null> => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOne({ where: { id: id } });
  if (!user) return null;
  user.email = updatedUser.email;
  return userRepository.save(user);
}

export const deleteUser = async (id : number) => {
  const userRepository = AppDataSource.getRepository(User);
  userRepository.createQueryBuilder().delete().from(User).where({id: id}).execute();
}