import { BehaviorSubject } from "rxjs";
import { RxCollection } from "rxdb";
import { DraftInterface } from "pck-schema";

// export const collectionSubject =
//   new BehaviorSubject<RxCollection<DraftInterface> | null>(null);
// initDatabaseFn()
//   .then((collection) => {
//     // 更新BehaviorSubject
//     collectionSubject.next(collection);
//   })
//   .catch((db) => {
//     console.log("error, has created");
//     console.log(db);
//   });

export const collectionSubject = new BehaviorSubject<RxCollection<DraftInterface> | null>(null);

// 初始化数据库
// initDatabaseFn()
//   .then((collection) => {
//     // 更新 BehaviorSubject
//     collectionSubject.next(collection);
//   })
//   .catch((error) => {
//     console.log("Error initializing database:", error);
//   });
