import { BehaviorSubject } from "rxjs";
import { RxCollection } from "rxdb";
import { initDatabaseFn } from "../database/init";
// 定义集合类型
interface HahaDocumentType {
  id: string;
  title: string;
  content: object;
  createTime: string;
}
export const collectionSubject =
  new BehaviorSubject<RxCollection<HahaDocumentType> | null>(null);
initDatabaseFn()
  .then((collection) => {
    // 更新BehaviorSubject
    collectionSubject.next(collection);
  })
  .catch((db) => {
    console.log("error, has created");
    console.log(db);
  });
