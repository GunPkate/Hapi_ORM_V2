// import { ServerRoute, Request, ResponseToolkit } from "@hapi/hapi";
// import { genSalt, hash } from "bcrypt";
// import { DataSource, Repository } from "typeorm";
// import { UserEntity } from "../../DB/Entities/user_entity";
// import bcrypt from "bcrypt";
// import { sign } from "jsonwebtoken";

// export const authController = (con: DataSource): Array<ServerRoute> => {
//   const user: Repository<UserEntity> = con.getRepository(UserEntity);
//   return [
//     {
//       method: "POST",
//       path: "register",
//       async handler({ payload }: Request) {
//         const { firstName, lastName, email, password, birthDate } =
//           payload as Partial<UserEntity>;
//         const salt = await bcrypt.genSalt();
//         const hash = await bcrypt.hash(password, salt);
//         const u = new UserEntity(
//           firstName,
//           lastName,
//           email,
//           birthDate,
//           password,
//           salt,
//         );
//         await user.save<Partial<UserEntity>>(u);
//         delete u.password;
//         delete u.salt;
//         return { ...u, token: sign({ ...u }, "secret") };
//       },
//     },
//   ];
// };
