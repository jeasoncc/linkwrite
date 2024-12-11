// 组件名称: sidebar-file
// 作者: Martin
// 创建日期: 2024-12-07 15:14:16
// 描述: 这是一个自动生成的组件文件

import React, { } from 'react';
import './index.scss';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

const SidebarFile: React.FC = () => {
    return (
        <div className="sidebar-file__container">
            <h1>sidebar-file</h1>
            <Sidebar rtl>
                <Menu>
                    <MenuItem> Documentation </MenuItem>
                    <MenuItem> Documentation </MenuItem>
                    <MenuItem> Documentation </MenuItem>
                    <MenuItem> Documentation </MenuItem>
                    <MenuItem> Calendar </MenuItem>
                </Menu>
            </Sidebar>
        </div>
    );
};

export default SidebarFile;
