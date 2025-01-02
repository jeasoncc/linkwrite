// 组件名称: redactor
// 作者: Martin
// 创建日期: 2024-12-13 14:00:47
// 描述: 这是一个自动生成的组件文件

import React, { useEffect, useState } from "react";
import "./index.scss";
import { LexicalApp } from "pck-core";
import TabCore from "pck-ui/src/pro-components/tab-core";

const Redactor: React.FC = () => {
  const [buffers, setBuffers] = useState([]);
  const [saveState, setSaveState] = useState();
  // useEffect(() => {
  //   // 订阅集合对象
  //   const subscription = getFileCache().subscribe(setFileCache);
  //   return () => subscription.unsubscribe(); // 组件卸载时取消订阅
  // }, []);

  return (
    <div className="redactor__container">
      <TabCore items={buffers} lexical={<LexicalApp saveState={saveState} />} />
    </div>
  );
};

export default Redactor;
