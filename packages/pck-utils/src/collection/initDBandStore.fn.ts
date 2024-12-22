import { initDatabaseFn } from "pck-db";
import { pinoLogger } from "pck-log";
import { collectionSubject } from "pck-store";
import { catchError, from, tap } from "rxjs";
//
export const initDBandStoreFn = () =>

  initDatabaseFn()
    .then((collection) => {
      // 更新 BehaviorSubject
      collectionSubject.next(collection);
    })
    .catch((error) => {
      console.log("Error initializing database:", error);
    });
// from(initDatabaseFn()).pipe(
//   tap((collection) => {
//     // 更新 BehaviorSubject
//     collectionSubject.next(collection);
//   }),
//   catchError((error) => {
//     pinoLogger.error("Error initializing database:", error);
//     return [];
//   })
// ).subscribe();
