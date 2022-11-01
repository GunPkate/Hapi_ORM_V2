const { name, internet, date, random } = require("faker");
import { Condition, Repository, DataSource } from "typeorm";
import { UserEntity, UserType } from "../Entities/user_entity";

export const mockUsers = async (source: DataSource, amount: number = 50) => {
  const userRepo: Repository<UserEntity> = source.getRepository(UserEntity);
  for (const data of Array.from({ length: amount })) {
    const firstName = name.firstName();
    const lastName = name.lastName();
    const birthDate = date.past();
    const email = internet.email();
    const type: UserType = random.arrayElement(["admin", "user"]);
    const u: Partial<UserEntity> = new UserEntity(
      firstName,
      lastName,
      birthDate,
      email,
      type
    );
    await userRepo.save<Partial<UserEntity>>(u);
  }
};
