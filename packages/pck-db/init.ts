import { addRxPlugin } from 'rxdb';
import { RxDBDevModePlugin } from 'rxdb/plugins/dev-mode';
import { databaseName } from './databaseName';
import { createDataBaseFn } from './createDataBaseFn';
import { schema } from './schema';
// import { checkFirstComingFn } from './checkDatabaseExistsFn';
addRxPlugin(RxDBDevModePlugin);

export async function initDatabaseFunction() {
  // checkFirstComingFn()
  let myDatabase = await createDataBaseFn()
  await myDatabase.addCollections({
    [databaseName]: {
      schema
    }
  })
  return myDatabase[databaseName]

  // await myDocument.modify(docData => {
  //   docData.done = true;
  //   return docData;
  // });
}
