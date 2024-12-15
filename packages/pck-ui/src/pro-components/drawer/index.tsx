// 组件名称: drawer
// 作者: Martin
// 创建日期: 2024-12-14 15:29:36
// 描述: 这是一个自动生成的组件文件

import React, { useEffect } from "react";
import { fromEvent } from "rxjs";
import { debounceTime, throttleTime } from "rxjs/operators";
import "./index.scss";

// 模拟数据
import items from "./data.json";
import { Item } from "./index.scheme";
import {
  DrawerActionTrigger,
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from "../../components/ui/drawer";
import { Button } from "../../components/ui/button";

const Drawer: React.FC = () => {
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
    <div className="drawer__container">
      <h1>drawer</h1>
      <DrawerRoot>
        <DrawerBackdrop />
        <DrawerTrigger asChild>
          <Button colorPalette="green" size="sm">
            Open Drawer
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Drawer Title</DrawerTitle>
          </DrawerHeader>
          <DrawerBody>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </DrawerBody>
          <DrawerFooter>
            <DrawerActionTrigger asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerActionTrigger>
            <Button>Save</Button>
          </DrawerFooter>
          <DrawerCloseTrigger />
        </DrawerContent>
      </DrawerRoot>
    </div>
  );
};

export default Drawer;
