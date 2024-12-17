// 组件名称: redactor
// 作者: Martin
// 创建日期: 2024-12-13 14:00:47
// 描述: 这是一个自动生成的组件文件

import React, { useEffect, useState } from "react";
import "./index.scss";

import { pinoLogger } from "pck-log";
import { LexicalApp } from "pck-core";
import { Alert, Button } from "pck-ui";

import { getFileCache } from "pck-db";

const Redactor: React.FC = () => {
  const saveState = (state: any) => {
    pinoLogger.info("document has changed!");
  };
  const [fileCache, setFileCache] = useState([]);
  useEffect(() => {
    // 订阅集合对象
    const subscription = getFileCache().subscribe(setFileCache);
    console.log(fileCache);
    return () => subscription.unsubscribe(); // 组件卸载时取消订阅
  }, []);

  return (
    <div className="redactor__container">
      {fileCache.map((file, index) => (
        <div key={index}>{file.id}</div>
      ))}
      <Alert status="success" title="Invalid Fields">
        Your form has some errors. Please fix them and try again.
      </Alert>
      <LexicalApp saveState={saveState} />
    </div>
  );
};

export default Redactor;
