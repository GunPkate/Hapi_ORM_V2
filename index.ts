import server from "./server";
import intern from "./DB/Mysql/intern";
import { local_dataSource } from "./DB/Mysql/local";

const init = async () => {
  // await server.register(authen);
  server.route({
    method: "get",
    path: "/",
    handler: (request, h) => {
      return "h";
    },
  });
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
local_dataSource();
init().then();
