import { pinoLogger } from "log";
import { databaseName } from "./databaseName";

const checkDatabaseExistsFn = async (dbName: string) => {
  const databases = await window.indexedDB.databases();
  pinoLogger.info(databases);
  return databases.some(db => db.name?.includes(dbName));
};

export const checkFirstComingFn = async () => {
  const exists = await checkDatabaseExistsFn(databaseName);
  pinoLogger.info("exists: " + exists)
  try {
    if (exists) {
      pinoLogger.info("database has created, this is not first time coming")
    }
    pinoLogger.info("database create success, this is the first time coming")
  } catch (error) {
    pinoLogger.error("进入到报错处理")
    pinoLogger.error(error)
  }
}

