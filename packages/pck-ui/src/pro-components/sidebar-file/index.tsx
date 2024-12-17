// 组件名称: sidebar-file
// 作者: Martin
// 创建日期: 2024-12-07 15:14:16
// 描述: 这是一个自动生成的组件文件

import React from "react";
import "./index.scss";
import { Box, List, VStack } from "@chakra-ui/react";
import { LuCircleCheckBig } from "react-icons/lu";
import { Blockquote } from "../../components/ui/blockquote";

interface ItemInterface {
  id: string;
  title: string;
  createTime: string;
}
interface SidebarFile {
  list?: ItemInterface[];
  openFileFn?: Function;
}
const NullFile: React.FC = ({}) => {
  return (
    <Blockquote showDash cite="Uzumaki Naruto">
      阳光照在每一个人的脸上
      <br /> 无论它是圣人还是罪人
    </Blockquote>
  );
};

const SidebarFile: React.FC<SidebarFile> = ({ list = [], openFileFn }) => {
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
          {!list.length ? (
            <NullFile />
          ) : (
            <List.Root gap="2" variant="plain" align="center">
              {list.map((item, index: number) => (
                <List.Item key={index} onClick={() => openFileFn(item)}>
                  <List.Indicator asChild color="green.500">
                    <LuCircleCheckBig />
                  </List.Indicator>
                  {item?.createTime}
                </List.Item>
              ))}
            </List.Root>
          )}
        </VStack>
      </Box>
    </div>
  );
};

export default SidebarFile;
