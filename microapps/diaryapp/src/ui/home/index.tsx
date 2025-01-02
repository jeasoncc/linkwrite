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
import Outline from "pck-ui/src/pro-components/outline";
import { pinoLogger } from "pck-log";
import { IconItem, makeIncoListFn } from "pck-ui";
import { utilsInitFn } from "pck-utils";
import { collectionSubject, findAllDraftStoreFn, insertDraftFn } from "pck-store";

// const openFileFn = (item) => {
//   console.log(item);
//   updateFileCache(item);
// };
const Home: React.FC = () => {
  const [drafts, setDrafts] = useState([]);
  const [iconList, setIconList] = useState<IconItem[]>([]);
  const [openDraftFn, setOpenDraftFn] = useState(utilsInitFn);
  // () => incoListFn({ createDocumentFn })
  useEffect(() => {
    setIconList(
      makeIncoListFn({
        insertFn: () => insertDraftFn(collectionSubject),
        deleteFn: utilsInitFn,
        searchFn: utilsInitFn,
      }),
    );
    // setOpenDraftFn(findAllDraftStoreFn(collectionSubject).subscribe())
    // const subscription = findAllDocumentFn().subscribe({
    //   next: (docs) => {
    //     pinoLogger.info("Documents updated:" + docs);
    //     setDrafts(docs);
    //   },
    //   error: (error) => console.error("Error fetching data:", error),
    // });
    //
    // // 清理订阅
    // return () => subscription.unsubscribe();
  }, []); // 空数组作为依赖项，确保只在组件挂载时执行一次

  return (
    <div className="home__container">
      <h1>home</h1>
      <LayoutHome
        activity={<SidebarActivity iconList={iconList} />}
        sidebar={<SidebarFile list={drafts} openFileFn={openDraftFn} />}
        main={<Redactor />}
        outline={<Outline />}
      />
    </div>
  );
};

export default Home;
