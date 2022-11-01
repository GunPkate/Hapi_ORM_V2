import { DataSource } from "typeorm";
// import { UserLog } from "../Entities/UserLogModel";
// import { User } from "../Entities/UserModels";

const local_dataSource: DataSource = new DataSource({
  type: "mysql",
  host: "mysql.thaistopbully.org",
  port: 33060,
  username: "intern",
  password: "intern@2022",
  database: "intern_test",
  synchronize: true,
  // logging: true,
  // entities: [UserLog,User],
});
console.log("connected");
local_dataSource.initialize();

export default local_dataSource;
