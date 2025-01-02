import { insertOneDocumentSqlFn } from "pck-db";
import { pinoLogger } from "pck-log";
import { RxCollection } from "rxdb";
import { Observable, from, switchMap } from "rxjs";
import { handleCollectionOperation } from "../../store/collection/handleCollectionOperation";

export const insertDraftFn = (
  collectionSubject: Observable<RxCollection | null>,
): Observable<any> => {
  return handleCollectionOperation(collectionSubject, (collection) => {
    return from(insertOneDocumentSqlFn(collection)).pipe(
      switchMap(() => {
        pinoLogger.info("Document created successfully");
        return from(collection.find().exec()); // 返回查询结果的 Observable
      }),
    );
  });
};

// // 创建文档
//
// insertDraftFn(collectionSubject).subscribe((result) => {
//   if (result) {
//     console.log("Document created and all documents:", result);
//   } else {
//     console.log("Document creation failed or no documents found.");
//   }
// });
