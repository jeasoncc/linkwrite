// import { checkFirstComingFn } from './checkDatabaseExistsFn';

import { DB_NAME } from "./config/DBNAME";
import { DRAFTSCHEMA } from "./config/document.schema";
import { createDataBaseFn } from "./database/init/createDataBase.fn";

export async function initDatabaseFn() {
  // checkFirstComingFn()
  let db = await createDataBaseFn();
  await db.addCollections({
    [DB_NAME]: {
      schema: DRAFTSCHEMA,
    },
  });
  return db[DB_NAME];
}
