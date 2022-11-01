import { DataSource } from "typeorm";
import { PostEntity } from "../Entities/posts_entity";
import { UserEntity } from "../Entities/user_entity";
import 'reflect-metadata'

const local_dataSource: DataSource =  new DataSource({
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
local_dataSource.initialize();

export default local_dataSource;
