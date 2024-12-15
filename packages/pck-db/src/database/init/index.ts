import { DB_NAME } from "./config/DBNAME";
import { createDataBaseFn } from "./createDataBaseFn";
import { documentSchema as schema } from "./schema/document.schema";
// import { checkFirstComingFn } from './checkDatabaseExistsFn';

export async function initDatabaseFn() {
  // checkFirstComingFn()
  let db = await createDataBaseFn();
  await db.addCollections({
    [DB_NAME]: {
      schema,
    },
  });
  return db[DB_NAME];

  // await myDocument.modify(docData => {
  //   docData.done = true;
  //   return docData;
  // });
}
