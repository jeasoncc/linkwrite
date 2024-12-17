import { pinoLogger } from "pck-log";
import { collectionSubject } from "../store/collectionSubject";
import { of } from "rxjs";
import { catchError, map, switchMap } from "rxjs/operators";

// export const findDocumentFn = () => {
//   const subject = collectionSubject.pipe(
//     switchMap((collection) => {
//       pinoLogger.info("Collection:", collection); // 调试信息
//       return collection ? collection.find().exec() : of([]);
//     }),
//     catchError((error) => {
//       console.error("Error fetching documents:", error);
//       return of([]); // 捕捉错误并返回一个空数组
//     }),
//   );

//   // 这里的订阅仅用于调试，可以在实际使用中移除
//   subject.subscribe((docs) => {
//     pinoLogger.info("Documents:", docs); // 调试信息
//     if (docs.length === 0) {
//       pinoLogger.info("No documents found"); // 处理空集合的情况
//     } else {
//       pinoLogger.info(docs); // 输出查找到的文档
//     }
//   });

//   return subject;
// };

export const findDocumentFn = () => {
  return collectionSubject.pipe(
    switchMap((collection) => {
      pinoLogger.info("Collection:", collection); // 调试信息
      return collection
        ? collection
            .find()
            .$.pipe(map((docs) => docs.map((doc) => doc.toJSON())))
        : of([]);
    }),
    catchError((error) => {
      console.error("Error fetching documents:", error);
      return of([]); // 捕捉错误并返回一个空数组
    }),
  );
};
