import { UserBuilder } from "./index.builder";
import { UserInterface } from "./index.interface";

// 使用 UserBuilder 创建用户对象
export const userFactory = () => {
  const user: UserInterface = new UserBuilder()
    .setUsername("john_doe")
    .setEmail("john.doe@example.com")
    .setPassword("securepassword")
    .setRole("admin")
    .setDocuments(["doc1", "doc2"])
    .setIsActive(true)
    .setLastLogin(new Date().toISOString())
    .build();

  return user;
};
