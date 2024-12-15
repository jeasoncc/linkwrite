// 组件名称: redactor
// 作者: Martin
// 创建日期: 2024-12-13 14:00:47
// 描述: 这是一个自动生成的组件文件

import React, { useEffect } from "react";
import "./index.scss";

import { pinoLogger } from "pck-log";
import { LexicalApp } from "pck-core";


const Redactor: React.FC = () => {
  const saveState = (state: any) => {
    pinoLogger.info("document has changed!")
  };

  useEffect(() => {
    // 订阅集合对象

    // 组件卸载时取消订阅
  }, []);


  return (
    <div className="redactor__container">
      <LexicalApp saveState={saveState} />
    </div>
  );
};

export default Redactor;
