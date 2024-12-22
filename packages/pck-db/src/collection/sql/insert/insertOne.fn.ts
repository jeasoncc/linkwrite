
import { DraftFactory } from "pck-schema";
import { RxCollection, RxDocument } from "rxdb";

export const insertOneDocumentSqlFn = (collection: RxCollection) => {
  return collection.insert(DraftFactory())
};
