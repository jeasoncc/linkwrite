// 组件名称: sidebar-activity
// 作者: Martin
// 创建日期: 2024-12-15 18:48:13
// 描述: 这是一个自动生成的组件文件

import React, { useEffect } from "react";
import { fromEvent } from "rxjs";
import { debounceTime, throttleTime } from "rxjs/operators";
import "./index.scss";

import { Item } from "./index.scheme";
import { Box, IconButton, Stack, VStack } from "@chakra-ui/react";
import {
  HiDocument,
  HiDocumentRemove,
  HiSearch,
} from "react-icons/hi";
import { Tooltip } from "../../components/ui/tooltip";

const SidebarActivity: React.FC = () => {
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

  const handleClick = (item: Item) => {
    console.log("Clicked item:", item);
  };

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
          <Tooltip
            content="Add a new Document"
            positioning={{ placement: "top" }}
            openDelay={100}
            closeDelay={10}
          >
            <IconButton aria-label="Search database">
              <HiDocument />
            </IconButton>
          </Tooltip>
          <IconButton aria-label="Search database">
            <HiSearch />
          </IconButton>
          <IconButton aria-label="Search database">
            <HiDocumentRemove />
          </IconButton>
          <IconButton aria-label="Search database">
            <HiDocumentRemove />
          </IconButton>
          <IconButton aria-label="Search database">
            <HiDocumentRemove />
          </IconButton>
          <IconButton aria-label="Search database">
            <HiDocumentRemove />
          </IconButton>
          <IconButton aria-label="Search database">
            <HiDocumentRemove />
          </IconButton>
          <IconButton aria-label="Search database">
            <HiDocumentRemove />
          </IconButton>
          <IconButton aria-label="Search database">
            <HiDocumentRemove />
          </IconButton>
          <IconButton aria-label="Search database">
            <HiDocumentRemove />
          </IconButton>
          <IconButton aria-label="Search database">
            <HiDocumentRemove />
          </IconButton>
          <IconButton aria-label="Search database">
            <HiDocumentRemove />
          </IconButton>
          <IconButton aria-label="Search database">
            <HiDocumentRemove />
          </IconButton>
        </VStack>
      </Box>
    </div>
  );
};

export default SidebarActivity;
