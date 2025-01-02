import { findByIdsDocumentSqlFn } from "pck-db";
import { DraftInterface } from "pck-schema";
import { RxCollection } from "rxdb";
import { Observable } from "rxjs";
import { handleCollectionOperation } from "../../store/collection/handleCollectionOperation";

export const findByIdsDocumentFn = (
  collectionSubject: Observable<RxCollection | null>,
  ids: string[],
): Observable<DraftInterface[]> => {
  return handleCollectionOperation(collectionSubject, (collection) => {
    return findByIdsDocumentSqlFn(collection, ids);
  });
};

// // 根据 ID 查询文档
//
// const ids = ["id1", "id2", "id3"];
// findByIdsDocumentFn(collectionSubject, ids).subscribe((documents) => {
//   console.log("Documents by IDs:", documents);
// });
//
