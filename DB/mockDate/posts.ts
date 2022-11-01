const { name, lorem, random } = require("faker");
import { Repository, DataSource } from "typeorm";
import { PostEntity } from "../Entities/posts_entity";
import { UserEntity } from "../Entities/user_entity";

export const mockPosts = async (source: DataSource, amount: number = 50) => {
  const PostRepo: Repository<PostEntity> = source.getRepository(PostEntity);
  const userRepo: Repository<UserEntity> = source.getRepository(UserEntity);
  const users: Array<UserEntity> = await userRepo.find();
  // console.log(users);
  for (const user of users) {
    const randomPost: boolean = random.arrayElement([true, false]);
    if (randomPost) {
      const title = name.jobTitle();
      const body = lorem.paragraphs();
      // const p: Partial<PostEntity> = new PostEntity(title, body, user);
      const p: Partial<PostEntity> = new PostEntity(title, body, user);
      await PostRepo.save<Partial<PostEntity>>(p);
      const title2 = name.jobTitle();
      const body2 = lorem.paragraphs();
      // const p2: Partial<PostEntity> = new PostEntity(title2, body2, user);
      // await PostRepo.save<Partial<PostEntity>>(p2);
    }
  }
};
