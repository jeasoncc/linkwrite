// 组件名称: home
// 作者: Martin
// 创建日期: 2024-12-13 13:58:09
// 描述: 这是一个自动生成的组件文件

import React, { useEffect, useState } from "react";
import "./index.scss";

import Redactor from "../redactor";
import LayoutHome from "pck-ui/src/layouts/layout-home";
import SidebarFeature from "pck-ui/src/pro-components/sidebar-feature";
import SidebarFile from "pck-ui/src/pro-components/sidebar-file";
import Drawer from "pck-ui/src/pro-components/drawer";
import { Button, toaster } from "pck-ui";
import { pinoLogger } from "pck-log";
import { createDocumentFn, findDocumentFn } from "pck-db";
import { from } from "rxjs";
const Home: React.FC = () => {

  const [data, setData] = useState([]);
  useEffect(() => {
    const subscription = findDocumentFn().subscribe({
      next: (docs) => setData(docs),
      error: (error) => console.error('Error fetching data:', error),
    });

    // 清理订阅
    return () => subscription.unsubscribe();
  }, []); // 空数组作为依赖项，确保只在组件挂载时执行一次
  const handleClick = () => {
    createDocumentFn();
    const subscription = findDocumentFn().subscribe({
      next: (docs) => setData(docs),
      error: (error) => console.error('Error fetching data:', error),
    });

    // 清理订阅
    return () => subscription.unsubscribe();
  };

  const findClick = () => {
  };
  return (
    <div className="home__container">
      <h1>home</h1>
      <Button colorPalette="teal" onClick={handleClick}>
        {" "}
        insert diary
      </Button>
      <br />
      <br />
      <Button colorPalette="teal" onClick={findClick}>
        find diary
        {" "}
      </Button>
      <LayoutHome
        sidebar={<SidebarFeature />}
        main={<Redactor />}
        outline={<SidebarFile list={data} />}
      />
    </div>
  );
};

export default Home;
