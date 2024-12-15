// 组件名称: layout-home
// 作者: Martin
// 创建日期: 2024-12-09 15:08:50
// 描述: 这是一个自动生成的组件文件

import React, { ReactNode } from "react";
import { Flex } from "@chakra-ui/react";
import "./index.scss";

interface LayoutHome {
  main?: ReactNode;
  sidebar?: ReactNode;
  outline?: ReactNode;
}
const LayoutHome: React.FC<LayoutHome> = ({ main, sidebar, outline }) => {
  return (
    <div className="layout-home__container">
      <Flex justify="space-between">
        {sidebar}
        {main}
        {outline}
      </Flex>
    </div>
  );
};

export default LayoutHome;
