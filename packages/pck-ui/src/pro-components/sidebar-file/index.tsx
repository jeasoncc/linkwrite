// 组件名称: sidebar-file
// 作者: Martin
// 创建日期: 2024-12-07 15:14:16
// 描述: 这是一个自动生成的组件文件

import React from "react";
import "./index.scss";
import { Box, List, VStack } from "@chakra-ui/react";
import { LuCircleCheckBig } from "react-icons/lu";

interface ItemInterface {
  id: string;
  title: string;
  createTime: string;
}
interface SidebarFile {
  list?: ItemInterface[];
}
const SidebarFile: React.FC<SidebarFile> = ({ list = [] }) => {
  return (
    <div className="sidebar-file__container">
      <h1>sidebar-file</h1>
      <Box
        p="4"
        shadow="sm"
        _hover={{ bg: "teal" }}
        borderRadius={"xl"}
        borderWidth="1px"
      >
        <VStack>
          <List.Root gap="2" variant="plain" align="center">
            {list.map((item, index: number) => (
              <List.Item key={index}>
                <List.Indicator asChild color="green.500">
                  <LuCircleCheckBig />
                </List.Indicator>
                {item?.createTime}
              </List.Item>
            ))}
          </List.Root>
        </VStack>
      </Box>
    </div>
  );
};

export default SidebarFile;
