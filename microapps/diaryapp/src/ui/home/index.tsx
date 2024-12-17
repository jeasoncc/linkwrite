// 组件名称: home
// 作者: Martin
// 创建日期: 2024-12-13 13:58:09
// 描述: 这是一个自动生成的组件文件

import React, { useEffect, useState } from "react";
import "./index.scss";

import Redactor from "../redactor";
import LayoutHome from "pck-ui/src/layouts/layout-home";
import SidebarFile from "pck-ui/src/pro-components/sidebar-file";
import SidebarActivity from "pck-ui/src/pro-components/sidebar-activity";
import { incoListFn } from "pck-ui";
import { createDocumentFn, findDocumentFn } from "pck-db";
import Outline from "pck-ui/src/pro-components/outline";
import { pinoLogger } from "pck-log";

const Home: React.FC = () => {
  const [data, setData] = useState([]);
  const [iconList] = useState(() => incoListFn({ createDocumentFn }));

  useEffect(() => {
    const subscription = findDocumentFn().subscribe({
      next: (docs) => {
        pinoLogger.info("Documents updated:" + docs);
        setData(docs);
      },
      error: (error) => console.error("Error fetching data:", error),
    });

    // 清理订阅
    return () => subscription.unsubscribe();
  }, []); // 空数组作为依赖项，确保只在组件挂载时执行一次

  return (
    <div className="home__container">
      <h1>home</h1>
      <LayoutHome
        activity={<SidebarActivity iconList={iconList} />}
        sidebar={<Outline />}
        main={<Redactor />}
        outline={<SidebarFile list={data} />}
      />
    </div>
  );
};

export default Home;
