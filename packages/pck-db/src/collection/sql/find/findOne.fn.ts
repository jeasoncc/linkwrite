import { RxCollection, RxDocument } from "rxdb";
import { map, of } from "rxjs";

export const findOneDocumentSqlFn = (collection: RxCollection, id: string) => {
  return collection
    ? collection
        .findOne({
          selector: {
            id: id,
          },
        })
        .$.pipe(
          map((doc: RxDocument | null) => {
            return doc ? doc.toJSON() : null;
          }),
        )
    : of(null);
};
