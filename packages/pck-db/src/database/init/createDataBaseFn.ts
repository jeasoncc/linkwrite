import { createRxDatabase } from "rxdb";
import { encryptedDexieStorage } from "./encryptedDexieStorage";

export const createDataBaseFn = async () => {
  const myDatabase = await createRxDatabase({
    name: "mydatabase",
    storage: encryptedDexieStorage,
    password: "sudoLetMeIn",
    ignoreDuplicate: true,
  });
  return myDatabase;
};
