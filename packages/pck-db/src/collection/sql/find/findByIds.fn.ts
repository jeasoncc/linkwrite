import { RxCollection, RxDocument } from "rxdb";
import { map, of } from "rxjs";

export const findByIdsDocumentSqlFn = (
  collection: RxCollection,
  ids: string[],
) => {
  return collection
    ? collection.findByIds(ids).$.pipe(
        map((result) => {
          const docs = Array.from(result.values()); // 将结果转换为数组
          return docs.map((doc: RxDocument) => doc.toJSON());
        }),
      )
    : of([]);
};
