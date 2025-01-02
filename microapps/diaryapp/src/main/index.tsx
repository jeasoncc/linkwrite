// 组件名称: main
// 作者: Martin
// 创建日期: 2024-12-07 06:27:20
// 描述: 这是一个自动生成的组件文件

import React, { useEffect } from "react";
import Home from "../ui/home";
import { Provider } from "pck-ui";
import { initDBandStoreFn } from "pck-store";
const Main: React.FC = () => {
  useEffect(() => {
    initDBandStoreFn();
  }, []);
  return (
    <Provider>
      <Home />
    </Provider>
  );
};

export default Main;
