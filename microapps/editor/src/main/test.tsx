// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.

import React, { useState } from "react";
// import * as echarts from 'echarts';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const [showFileTree, setShowFileTree] = useState(true);
  const [showSearch, setShowSearch] = useState(false);
  const [searchText, setSearchText] = useState("");

  const tabs = [
    {
      id: "tab1",
      title: "index.tsx",
      content:
        "// 这是主页面的代码\nconst Home = () => {\n  return <div>欢迎使用代码编辑器</div>\n}",
    },
    {
      id: "tab2",
      title: "style.css",
      content: "/* 样式文件 */\n.container {\n  padding: 20px;\n}",
    },
    {
      id: "tab3",
      title: "utils.ts",
      content:
        "// 工具函数\nexport const formatDate = (date: Date) => {\n  return date.toLocaleDateString();\n}",
    },
  ];

  const files = [
    {
      id: 1,
      name: "项目配置",
      type: "folder",
      children: [
        { id: 2, name: "package.json", type: "file" },
        { id: 3, name: "tsconfig.json", type: "file" },
      ],
    },
    {
      id: 4,
      name: "源代码",
      type: "folder",
      children: [
        { id: 5, name: "index.tsx", type: "file" },
        { id: 6, name: "style.css", type: "file" },
        { id: 7, name: "utils.ts", type: "file" },
      ],
    },
    {
      id: 8,
      name: "文档",
      type: "folder",
      children: [
        { id: 9, name: "README.md", type: "file" },
        { id: 10, name: "开发指南.md", type: "file" },
      ],
    },
  ];

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  const handleTabClose = (tabId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const nextTabs = tabs.filter((tab) => tab.id !== tabId);
    if (nextTabs.length > 0 && activeTab === tabId) {
      setActiveTab(nextTabs[0].id);
    }
  };

  const renderFileTree = (files: any[], level = 0) => {
    return files.map((file) => (
      <div
        key={file.id}
        className={`pl-${level * 4} py-1 hover:bg-gray-200 cursor-pointer`}
      >
        <div className="flex items-center">
          <i
            className={`fa ${file.type === "folder" ? "fa-folder text-yellow-600" : "fa-file-code text-blue-600"} mr-2`}
          ></i>
          <span>{file.name}</span>
        </div>
        {file.children && renderFileTree(file.children, level + 1)}
      </div>
    ));
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* 左侧图标导航栏 */}
      <div className="w-12 bg-gray-800 flex flex-col items-center py-4 space-y-4">
        <button
          onClick={() => setShowFileTree(true)}
          className={`w-8 h-8 flex items-center justify-center rounded hover:bg-gray-700 cursor-pointer ${showFileTree ? "bg-gray-700" : ""}`}
        >
          <i className="fa fa-folder text-gray-300"></i>
        </button>
        <button
          onClick={() => setShowSearch(true)}
          className={`w-8 h-8 flex items-center justify-center rounded hover:bg-gray-700 cursor-pointer ${showSearch ? "bg-gray-700" : ""}`}
        >
          <i className="fa fa-search text-gray-300"></i>
        </button>
        <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-700 cursor-pointer">
          <i className="fa fa-cog text-gray-300"></i>
        </button>
      </div>

      {/* 文件树区域 */}
      {showFileTree && (
        <div className="w-60 bg-gray-100 border-r border-gray-200">
          <div className="p-3 border-b border-gray-200 font-medium text-sm text-gray-600">
            资源管理器
          </div>
          <div className="p-2">{renderFileTree(files)}</div>
        </div>
      )}

      {/* 主编辑区域 */}
      <div className="flex-1 flex flex-col">
        {/* 标签页导航 */}
        <div className="flex bg-gray-100 border-b border-gray-200">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`
                px-4 py-2 flex items-center space-x-2 cursor-pointer
                ${activeTab === tab.id ? "bg-white border-t-2 border-blue-500" : "hover:bg-gray-200"}
              `}
            >
              <i className="fa fa-file-code text-gray-500 text-sm"></i>
              <span className="text-sm">{tab.title}</span>
              <button
                onClick={(e) => handleTabClose(tab.id, e)}
                className="w-4 h-4 flex items-center justify-center rounded-full hover:bg-gray-300"
              >
                <i className="fa fa-times text-xs text-gray-500"></i>
              </button>
            </div>
          ))}
        </div>

        {/* 编辑器内容区 */}
        <div className="flex-1 bg-white p-4">
          <pre className="font-mono text-sm">
            {tabs.find((tab) => tab.id === activeTab)?.content}
          </pre>
        </div>

        {/* 底部状态栏 */}
        <div className="h-6 bg-blue-600 text-white text-xs flex items-center px-4">
          <span>UTF-8</span>
          <span className="mx-4">|</span>
          <span>TypeScript React</span>
          <span className="mx-4">|</span>
          <span>行 1, 列 1</span>
        </div>
      </div>

      {/* 搜索面板 */}
      {showSearch && (
        <div className="w-60 bg-gray-100 border-l border-gray-200">
          <div className="p-3 border-b border-gray-200">
            <div className="relative">
              <input
                type="text"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="搜索文件..."
                className="w-full px-3 py-1 pr-8 rounded border border-gray-300 focus:outline-none focus:border-blue-500 text-sm"
              />
              <i className="fa fa-search absolute right-3 top-2 text-gray-400"></i>
            </div>
          </div>
          <div className="p-2">
            <div className="text-sm text-gray-500">无搜索结果</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
