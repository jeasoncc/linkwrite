// 组件名称: main
// 作者: Martin
// 创建日期: 2024-12-07 06:27:20
// 描述: 这是一个自动生成的组件文件

import React, { useEffect } from "react";
import "./index.scss";
import Home from "../ui/home";
import { Provider } from "pck-ui";

const Main: React.FC = () => {
  return (
    <Provider>
      <div className="main__container">
        <h1>main</h1>
        <Home />
      </div>
    </Provider>
  );
};

export default Main;
