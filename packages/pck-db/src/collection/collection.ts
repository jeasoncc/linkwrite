import { pinoLogger } from "pck-log";
import { RxCollection } from "rxdb";
import { from, Observable, switchMap } from "rxjs";
import { findAllDocumentSqlFn } from "./sql/find/findAll.fn";
import { findByIdsDocumentSqlFn } from "./sql/find/findByIds.fn";
import { insertOneDocumentSqlFn } from "./sql/insert/insertOne.fn";
import { handleCollectionOperation } from "./handleCollectionOperation";

export const findAllDocumentFn = (collectionSubject: Observable<RxCollection | null>): Observable<DraftInterface[]> => {
  return handleCollectionOperation(collectionSubject, (collection) => {
    return findAllDocumentSqlFn(collection);
  });
};
export const findByIdsDocumentFn = (collectionSubject: Observable<RxCollection | null>, ids: string[]): Observable<DraftInterface[]> => {
  return handleCollectionOperation(collectionSubject, (collection) => {
    return findByIdsDocumentSqlFn(collection, ids);
  });
};
export const createDocumentFn = (collectionSubject: Observable<RxCollection | null>): Observable<any> => {
  return handleCollectionOperation(collectionSubject, (collection) => {
    return from(insertOneDocumentSqlFn(collection)).pipe(
      switchMap(() => {
        pinoLogger.info("Document created successfully");
        return from(collection.find().exec()); // 返回查询结果的 Observable
      })
    );
  });
};
// 调用示例
// 查询所有文档

findAllDocumentFn(collectionSubject).subscribe((documents) => {
  console.log("All documents:", documents);
});

// 根据 ID 查询文档

const ids = ["id1", "id2", "id3"];
findByIdsDocumentFn(collectionSubject, ids).subscribe((documents) => {
  console.log("Documents by IDs:", documents);
});

// 创建文档

createDocumentFn(collectionSubject).subscribe((result) => {
  if (result) {
    console.log("Document created and all documents:", result);
  } else {
    console.log("Document creation failed or no documents found.");
  }
});
