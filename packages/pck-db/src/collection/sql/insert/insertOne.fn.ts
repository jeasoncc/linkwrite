
import { RxCollection, RxDocument } from "rxdb";
import { DraftFactory } from "../../../../schema/draft/index.factory";

export const insertOneDocumentSqlFn = (collection: RxCollection) => {
  return collection.insert(DraftFactory())
};
