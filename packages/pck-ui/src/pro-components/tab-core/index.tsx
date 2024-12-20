// 组件名称: tab-core
// 作者: Martin
// 创建日期: 2024-12-18 16:53:40
// 描述: 这是一个自动生成的组件文件

import React, { ReactNode, useEffect } from "react";
import { fromEvent } from "rxjs";
import { debounceTime, throttleTime } from "rxjs/operators";
import "./index.scss";

// 模拟数据
import { Item } from "./index.scheme";
import { For, Tabs } from "@chakra-ui/react";
import { CloseButton } from "../../components/ui/close-button";
import { Status } from "../../components/ui/status";
interface TabCore {
  items: [];
  lexical?: ReactNode;
}

const TabCore: React.FC<TabCore> = ({ items = [], lexical }) => {
  return (
    <div className="tab-core__container">
      <h1>tab-core</h1>
      <Tabs.Root defaultValue="members">
        <Tabs.List>
          <For each={items} fallback={<p>aaaaa</p>}>
            {(item: Item, index: number) => (
              <Tabs.Trigger key={index} value={item.id}>
                <Status value="warning" />
                {item.id}
                <CloseButton
                  as="span"
                  role="button"
                  size="2xs"
                  me="-2"
                  onClick={(e) => {
                    console.log("close");
                  }}
                />
              </Tabs.Trigger>
            )}
          </For>
        </Tabs.List>

        {items.map((item: Item, index: number) => (
          <Tabs.Content key={index} value={item.id}>
            {item.id}
            {lexical}
          </Tabs.Content>
        ))}
      </Tabs.Root>
    </div>
  );
};

export default TabCore;
