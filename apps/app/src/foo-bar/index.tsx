// 组件名称: foo-bar
// 作者: Martin
// 创建日期: 2024-10-14 15:00:40
// 描述: 这是一个自动生成的组件文件

import React from "react";
import "./index.scss";
// 模拟数据
import { LexicalApp } from "core-app";
const FooBar: React.FC = () => {
  const saveState = (state: string) => {
    console.log(state);
  };
  return (
    <div className="foo-bar__container">
      <h1>foo-bar</h1>
      <LexicalApp saveState={saveState} />
    </div>
  );
};

export default FooBar;
