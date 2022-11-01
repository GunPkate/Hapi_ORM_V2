import { UserEntity } from "./../../DB/Entities/user_entity";
import { ResponseToolkit, ServerRoute, Request } from "@hapi/hapi";
import { DataSource } from "typeorm";
import Boom from "@hapi/boom";

export const userController = (con: DataSource): Array<ServerRoute> => {
  const user = con.getRepository(UserEntity);
  return [
    {
      method: "GET",
      path: "/user",
      handler: (request: Request, h: ResponseToolkit, err?: Error) => {
        return user.find();
      },
    },
    {
      method: "GET",
      path: "/user/{id}",
      handler: (request: Request, h: ResponseToolkit, err?: Error) => {
        const id: number = request.params.id;
        return user.findOneBy({ id: id });
      },
    },
    {
      method: "Delete",
      path: "/user/{id}",
      handler: async (request: Request, h: ResponseToolkit, err?: Error) => {
        try {
          const id: number = request.params.id;
          const find: any = await user.findOneBy({ id: id });
          await user.remove(find);
          return "Deleted";
        } catch (error) {
          const err: Error = new Error("Delete Error");
          Boom.boomify(err, { statusCode: 500 });
        }
      },
    },
  ];
};
