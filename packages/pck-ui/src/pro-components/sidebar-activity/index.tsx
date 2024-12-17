// 组件名称: sidebar-activity
// 作者: Martin
// 创建日期: 2024-12-15 18:48:13
// 描述: 这是一个自动生成的组件文件

import React, { useEffect, useState } from "react";
import "./index.scss";

import { Box, IconButton, VStack } from "@chakra-ui/react";
import { Tooltip } from "../../components/ui/tooltip";

interface IconItem {
  content: string;
  onclickFn: () => void;
  icon: React.ReactNode;
}

interface SidebarActivityProps {
  iconList?: IconItem[];
}

const SidebarActivity: React.FC<SidebarActivityProps> = ({ iconList = [] }) => {
  /* useEffect(() => {
   *   setIconList(incoListFn());
   * }, []); */
  return (
    <div className="sidebar-activity__container">
      <Box
        p="4"
        shadow="md"
        _hover={{ bg: "gray" }}
        borderRadius={"2xl"}
        borderWidth="1px"
      >
        <VStack>
          {iconList.map((iconItem, index: number) => (
            <Tooltip
              content={iconItem.content}
              positioning={{ placement: "right" }}
              openDelay={100}
              closeDelay={10}
              key={index}
            >
              <IconButton
                aria-label={iconItem.content}
                onClick={iconItem.onclickFn}
              >
                {iconItem.icon}
              </IconButton>
            </Tooltip>
          ))}
        </VStack>
      </Box>
    </div>
  );
};
export default SidebarActivity;
