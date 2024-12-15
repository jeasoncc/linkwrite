// 组件名称: sidebar-feature
// 作者: Martin
// 创建日期: 2024-12-07 15:14:34
// 描述: 这是一个自动生成的组件文件

import React from "react";
import "./index.scss";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

const SidebarFeature: React.FC = () => {
  return (
    <div className="sidebar-feature__container">
      <h1>sidebar-feature</h1>

      <Sidebar>
        <Menu>
          <SubMenu label="Charts">
            <MenuItem> Pie charts </MenuItem>
            <MenuItem> Line charts </MenuItem>
          </SubMenu>
          <MenuItem> Documentation </MenuItem>
          <MenuItem> Calendar </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
};

export default SidebarFeature;
