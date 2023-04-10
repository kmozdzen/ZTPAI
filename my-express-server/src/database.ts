import { DataSource } from "typeorm";
import { data } from "./config";

const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: data.username,
    password: data.password,
    database: data.database,
    synchronize: true,
    logging: true,
    entities: ["src/entity/*{.ts, .js}"],
    subscribers: [],
    migrations: [],
  })

  AppDataSource.initialize().then(() => {
    console.log("works")
  }).catch((err) => {
    console.log("err")
  });

  export { AppDataSource };