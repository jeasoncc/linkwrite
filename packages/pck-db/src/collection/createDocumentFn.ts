import { pinoLogger } from "pck-log";
import { makeRandomFn } from "pck-utils";
import { collectionSubject } from "../store/collectionSubject";
const createTime = new Date()
  .toLocaleString("en-GB", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  })
  .replace(/[/, ]/g, "-")
  .replace(/:/g, "-");
export function createDocumentFn() {
  collectionSubject.subscribe((collection) => {
    if (collection) {
      collection
        .insert({
          id: makeRandomFn(),
          title: "Test",
          content: {},
          createTime,
        })
        .then(() => {
          pinoLogger.info("document create success");
          return collection.find().exec(); // 确保返回查询结果的 Promise
        })
        .then((documents) => {
          pinoLogger.info(documents); // 输出所有文档
        })
        .catch((error) => {
          pinoLogger.error("document create failed", error);
        });
    }
  });
}
