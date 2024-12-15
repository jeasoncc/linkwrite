// 组件名称: sidebar-file
// 作者: Martin
// 创建日期: 2024-12-07 15:14:16
// 描述: 这是一个自动生成的组件文件

import React, { ReactNode } from "react";
import "./index.scss";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

interface SidebarFile {
  list?: [];
}
const SidebarFile: React.FC<SidebarFile> = ({ list }) => {
  return (
    <div className="sidebar-file__container">
      <h1>sidebar-file</h1>
      <Sidebar>
        <Menu>
          <SubMenu label="diary">
            {list.map((item, index: number) => (
              <div
                key={index}
                className="test__item"
              >
                <MenuItem>{item?._data.createTime}</MenuItem>
              </div>
            ))}
          </SubMenu>
        </Menu>
      </Sidebar>
    </div>
  );
};

export default SidebarFile;
