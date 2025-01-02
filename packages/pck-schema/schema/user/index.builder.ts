import { makeRandomFn } from "pck-utils";
import { UserInterface } from "./index.interface";

export class UserBuilder {
  private user: UserInterface;

  constructor() {
    const currentTime = new Date().toISOString();
    this.user = {
      id: this.generateId(),
      username: "",
      email: "",
      password: "",
      createdAt: currentTime,
      updatedAt: currentTime,
      role: "viewer",
      documents: [],
      isActive: true,
      lastLogin: "",
    };
  }

  private generateId(): string {
    return makeRandomFn();
  }

  private generateDatabse(): string {
    return makeRandomFn();
  }
  setUsername(username: string): UserBuilder {
    this.user.username = username;
    return this;
  }

  setEmail(email: string): UserBuilder {
    this.user.email = email;
    return this;
  }

  setPassword(password: string): UserBuilder {
    this.user.password = password;
    return this;
  }

  setRole(role: string): UserBuilder {
    this.user.role = role;
    return this;
  }

  setDocuments(documents: string[]): UserBuilder {
    this.user.documents = documents;
    return this;
  }

  setIsActive(isActive: boolean): UserBuilder {
    this.user.isActive = isActive;
    return this;
  }

  setLastLogin(lastLogin: string): UserBuilder {
    this.user.lastLogin = lastLogin;
    return this;
  }

  build(): UserInterface {
    return this.user;
  }
}
