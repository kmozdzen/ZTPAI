import { DataSource } from "typeorm";
import { data } from "./config";

const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: data.username,
    password: data.password,
    database: data.database,
    synchronize: false,
    logging: true,
    entities: ["src/entity/*{.ts, .js}"],
    subscribers: [],
    migrations: [],
  })

  AppDataSource.initialize()
  .then(() => {
    console.log("works");
  })
  .catch((error) => console.log(error))

  export { AppDataSource };