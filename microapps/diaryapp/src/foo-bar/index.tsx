// 组件名称: foo-bar
// 作者: Martin
// 创建日期: 2024-10-14 15:00:40
// 描述: 这是一个自动生成的组件文件

import React from "react";
import "./index.scss";
import { LexicalApp } from "pck-core";
import { initDatabaseFn } from "pck-db";
import { pinoLogger } from "pck-log";
import { makeRandomFn } from "pck-utils";

const FooBar: React.FC = () => {
  pinoLogger.info("coming foobar");
  const saveState = (state: any) => {
    pinoLogger.info(state);
    initDatabaseFn()
      .then((collection) => {
        pinoLogger.info("success");
        collection.insert({
          id: makeRandomFn(),
          secret: "sudoLetMeIn",
          name: "Learn RxDB-hahahh",
          done: false,
          content: state,
          timestamp: new Date().toISOString(),
        });
      })
      .catch((db) => {
        console.log("error, has created");
        console.log(db);
      });
  };
  return (
    <div className="foo-bar__container">
      <h1>foo-bar</h1>
      <LexicalApp saveState={saveState} />
    </div>
  );
};

export default FooBar;
