import { mockUsers } from "./../mockDate/user";
import { createConnection, DataSource } from "typeorm";
import { PostEntity } from "../Entities/posts_entity";
import { UserEntity } from "../Entities/user_entity";
import "reflect-metadata";

export const local_dataSource = async (): Promise<DataSource> => {
  const mockfunc = [mockUsers];
  console.log(mockfunc);
  const con: DataSource = await createConnection({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "hapi",
    synchronize: true,
    logging: true,
    entities: [UserEntity, PostEntity],
  });
  console.log("connected");
  for (const fun of mockfunc) {
    await fun(con);
  }

  return con;
  // local_dataSource.initialize();
};
