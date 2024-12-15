// 组件名称: content-pane
// 作者: Martin
// 创建日期: 2024-12-07 15:22:15
// 描述: 这是一个自动生成的组件文件

import React, { useEffect } from "react";
import { fromEvent } from "rxjs";
import { debounceTime, throttleTime } from "rxjs/operators";
import "./index.scss";
// 模拟数据
import SidebarFile from "pck-ui/src/pro-components/sidebar-file";
import LayoutHome from "pck-ui/src/layouts/layout-home";
import SidebarFeature from "pck-ui/src/pro-components/sidebar-feature";
import FooBar from "../foo-bar";

const ContentPane: React.FC = () => {
  useEffect(() => {
    const clickStream = fromEvent(document, "click").pipe(
      debounceTime(300),
      throttleTime(500),
    );

    const subscription = clickStream.subscribe(() => {
      console.log("Document clicked!");
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <div className="content-pane__container">
      <LayoutHome
        sidebar={<SidebarFeature />}
        main={<FooBar />}
        outline={<SidebarFile />}
      />
    </div>
  );
};

export default ContentPane;
