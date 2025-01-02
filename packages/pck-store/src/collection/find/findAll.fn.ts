import { findAllDocumentSqlFn } from "pck-db";
import { DraftInterface } from "pck-schema";
import { RxCollection } from "rxdb";
import { Observable } from "rxjs";
import { handleCollectionOperation } from "./../../store/collection/handleCollectionOperation";
export const findAllDraftStoreFn = (
  collectionSubject: Observable<RxCollection | null>,
): Observable<DraftInterface[]> => {
  return handleCollectionOperation(collectionSubject, (collection) => {
    return findAllDocumentSqlFn(collection);
  });
};

// 调用示例
// 查询所有文档
// findAllDocumentFn(collectionSubject).subscribe((documents) => {
//   console.log("All documents:", documents);
// });
