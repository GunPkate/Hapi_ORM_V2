import server from "./server";
import intern from "./DB/Mysql/intern";
import { local_dataSource } from "./DB/Mysql/local";
import { userController } from "./controller/users/userController";

const init = async () => {
  const con = await local_dataSource();
  // await server.register(authen);
  server.route(userController(con));
  // await server.register({
  //   plugin: userlog,
  // });
  // await server.register([inert, user]);
  // await server.register(sum);
  // await server.register(wait);
  await server.start();
  console.log(server.info.uri);
};

// intern.initialize();

init().then();
