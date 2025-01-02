import { RxCollection, RxDocument } from "rxdb";
import { map, of } from "rxjs";

export const findAllDocumentSqlFn = (collection: RxCollection) => {
  return collection
    ? collection
        .find()
        .$.pipe(map((docs: RxDocument[]) => docs.map((doc) => doc.toJSON())))
    : of([]);
};
