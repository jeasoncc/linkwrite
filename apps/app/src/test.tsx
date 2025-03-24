// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const App: React.FC = () => {
  const [activeFile, setActiveFile] = useState("word.batchHandler.ts");
  const [terminalOutput, setTerminalOutput] = useState([
    "History restored",
    "Linux jeason-Blade-Stealth 5.15.0-430-generic x86_64",
    "00:32:21 up 4 days, 3:08, 6 users, load average: 1.71, 2.22, 2.27",
  ]);

  const fileTree = {
    "OPEN EDITORS": [
      { name: "index.vue", path: "src/pages/common-use/study-record" },
      { name: "add.vue", path: "src/pages/common-use/study-record" },
      { name: "word.batchHandler.ts", path: "src/schema/words" },
      { name: "debounce.ts", path: "src/utils" },
      { name: "index.ts", path: "src/api/login" },
    ],
    "HAPPY-PARENTING-INIT": {
      src: {
        pages: {
          "common-use": {
            "study-record": ["test.vue", "tools.vue"],
          },
        },
        schema: {
          words: [
            "word.batchHandler.ts",
            "word.builder.ts",
            "word.interface.ts",
            "word.test.ts",
          ],
        },
      },
    },
  };

  const codeContent = `import { WordBuilder } from './word.builder';
import type { Word } from './word.interface';

/**
 * 批量处理后端传来的 Word 对象数组
 * @param wordList 后端传过来的 Word 对象数组
 * @returns 处理后的 Word 对象数组
 */
export function batchProcessWords(wordList: any[]): Word[] {
  // 使用 map 方法遍历后端传来的每个单词对象
  return wordList.map(item => {
    // 创建一个新的 WordBuilder 实例
    const builder = new WordBuilder();

    const { origId, wordType, title, content, translationType } = item;

    // 设置单词的原始 ID
    builder.setOrigId(origId);
    // 设置单词类型
    builder.setWordType(wordType);
    // 设置单词名称，如果传入为空则设置为空字符串
    builder.setTitle(title);
    // 设置单词的文本内容，如果传入为空则设置为空字符串
    builder.setContent(content);

    // 构建并返回最终的 Word 对象
    return builder.build();
  });
}`;

  return (
    <div className="h-screen bg-[#1e1e1e] text-white flex flex-col">
      {/* Top Menu Bar */}
      <div className="h-8 bg-[#323233] flex items-center px-2 text-sm">
        <div className="flex space-x-4">
          <span>文件</span>
          <span>编辑</span>
          <span>选择</span>
          <span>查看</span>
          <span>转到</span>
          <span>运行</span>
          <span>终端</span>
          <span>帮助</span>
        </div>
      </div>

      <div className="flex-1 flex">
        {/* Left Sidebar */}
        <div className="w-64 bg-[#252526] border-r border-[#3c3c3c]">
          <ScrollArea className="h-full">
            <div className="p-2">
              <div className="mb-4">
                <div className="text-xs text-gray-400 mb-2">EXPLORER</div>
                <div className="space-y-1">
                  {fileTree["OPEN EDITORS"].map((file, index) => (
                    <div
                      key={index}
                      className={`text-sm py-1 px-2 cursor-pointer ${activeFile === file.name ? "bg-[#37373d]" : "hover:bg-[#2a2d2e]"}`}
                      onClick={() => setActiveFile(file.name)}
                    >
                      <div>{file.name}</div>
                      <div className="text-xs text-gray-500">{file.path}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollArea>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Tab Bar */}
          <div className="h-9 bg-[#252526] flex items-center px-2 border-b border-[#3c3c3c]">
            <div className="flex items-center h-full">
              <div className="px-3 h-full flex items-center bg-[#1e1e1e] text-sm">
                word.batchHandler.ts
              </div>
            </div>
          </div>

          {/* Code Editor */}
          <ScrollArea className="flex-1 bg-[#1e1e1e]">
            <pre className="p-4 text-sm font-mono">
              <code>{codeContent}</code>
            </pre>
          </ScrollArea>

          {/* Bottom Panel */}
          <div className="h-48 bg-[#1e1e1e] border-t border-[#3c3c3c]">
            <Tabs defaultValue="terminal">
              <TabsList className="bg-[#252526] border-b border-[#3c3c3c]">
                <TabsTrigger value="problems">问题</TabsTrigger>
                <TabsTrigger value="output">输出</TabsTrigger>
                <TabsTrigger value="terminal">终端</TabsTrigger>
                <TabsTrigger value="ports">端口</TabsTrigger>
              </TabsList>
              <TabsContent value="terminal" className="p-2">
                <ScrollArea className="h-32">
                  {terminalOutput.map((line, index) => (
                    <div key={index} className="text-sm font-mono">
                      {line}
                    </div>
                  ))}
                </ScrollArea>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>

      {/* Status Bar */}
      <div className="h-6 bg-[#007acc] flex items-center justify-between px-2 text-xs">
        <div className="flex items-center space-x-2">
          <span>TypeScript</span>
          <span>UTF-8</span>
          <span>LF</span>
        </div>
        <div className="flex items-center space-x-2">
          <span>第 15 行，第 28 列</span>
          <span>空格：4</span>
        </div>
      </div>
    </div>
  );
};

export default App;
// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const App: React.FC = () => {
  const [activeFile, setActiveFile] = useState("word.batchHandler.ts");
  const [terminalOutput, setTerminalOutput] = useState([
    "History restored",
    "Linux jeason-Blade-Stealth 5.15.0-430-generic x86_64",
    "00:32:21 up 4 days, 3:08, 6 users, load average: 1.71, 2.22, 2.27",
  ]);

  const fileTree = {
    "OPEN EDITORS": [
      { name: "index.vue", path: "src/pages/common-use/study-record" },
      { name: "add.vue", path: "src/pages/common-use/study-record" },
      { name: "word.batchHandler.ts", path: "src/schema/words" },
      { name: "debounce.ts", path: "src/utils" },
      { name: "index.ts", path: "src/api/login" },
    ],
    "HAPPY-PARENTING-INIT": {
      src: {
        pages: {
          "common-use": {
            "study-record": ["test.vue", "tools.vue"],
          },
        },
        schema: {
          words: [
            "word.batchHandler.ts",
            "word.builder.ts",
            "word.interface.ts",
            "word.test.ts",
          ],
        },
      },
    },
  };

  const codeContent = `import { WordBuilder } from './word.builder';
import type { Word } from './word.interface';

/**
 * 批量处理后端传来的 Word 对象数组
 * @param wordList 后端传过来的 Word 对象数组
 * @returns 处理后的 Word 对象数组
 */
export function batchProcessWords(wordList: any[]): Word[] {
  // 使用 map 方法遍历后端传来的每个单词对象
  return wordList.map(item => {
    // 创建一个新的 WordBuilder 实例
    const builder = new WordBuilder();

    const { origId, wordType, title, content, translationType } = item;

    // 设置单词的原始 ID
    builder.setOrigId(origId);
    // 设置单词类型
    builder.setWordType(wordType);
    // 设置单词名称，如果传入为空则设置为空字符串
    builder.setTitle(title);
    // 设置单词的文本内容，如果传入为空则设置为空字符串
    builder.setContent(content);

    // 构建并返回最终的 Word 对象
    return builder.build();
  });
}`;

  return (
    <div className="h-screen bg-[#1e1e1e] text-white flex flex-col">
      {/* Top Menu Bar */}
      <div className="h-8 bg-[#323233] flex items-center px-2 text-sm">
        <div className="flex space-x-4">
          <span>文件</span>
          <span>编辑</span>
          <span>选择</span>
          <span>查看</span>
          <span>转到</span>
          <span>运行</span>
          <span>终端</span>
          <span>帮助</span>
        </div>
      </div>

      <div className="flex-1 flex">
        {/* Left Sidebar */}
        <div className="w-64 bg-[#252526] border-r border-[#3c3c3c]">
          <ScrollArea className="h-full">
            <div className="p-2">
              <div className="mb-4">
                <div className="text-xs text-gray-400 mb-2">EXPLORER</div>
                <div className="space-y-1">
                  {fileTree["OPEN EDITORS"].map((file, index) => (
                    <div
                      key={index}
                      className={`text-sm py-1 px-2 cursor-pointer ${activeFile === file.name ? "bg-[#37373d]" : "hover:bg-[#2a2d2e]"}`}
                      onClick={() => setActiveFile(file.name)}
                    >
                      <div>{file.name}</div>
                      <div className="text-xs text-gray-500">{file.path}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollArea>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Tab Bar */}
          <div className="h-9 bg-[#252526] flex items-center px-2 border-b border-[#3c3c3c]">
            <div className="flex items-center h-full">
              <div className="px-3 h-full flex items-center bg-[#1e1e1e] text-sm">
                word.batchHandler.ts
              </div>
            </div>
          </div>

          {/* Code Editor */}
          <ScrollArea className="flex-1 bg-[#1e1e1e]">
            <pre className="p-4 text-sm font-mono">
              <code>{codeContent}</code>
            </pre>
          </ScrollArea>

          {/* Bottom Panel */}
          <div className="h-48 bg-[#1e1e1e] border-t border-[#3c3c3c]">
            <Tabs defaultValue="terminal">
              <TabsList className="bg-[#252526] border-b border-[#3c3c3c]">
                <TabsTrigger value="problems">问题</TabsTrigger>
                <TabsTrigger value="output">输出</TabsTrigger>
                <TabsTrigger value="terminal">终端</TabsTrigger>
                <TabsTrigger value="ports">端口</TabsTrigger>
              </TabsList>
              <TabsContent value="terminal" className="p-2">
                <ScrollArea className="h-32">
                  {terminalOutput.map((line, index) => (
                    <div key={index} className="text-sm font-mono">
                      {line}
                    </div>
                  ))}
                </ScrollArea>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>

      {/* Status Bar */}
      <div className="h-6 bg-[#007acc] flex items-center justify-between px-2 text-xs">
        <div className="flex items-center space-x-2">
          <span>TypeScript</span>
          <span>UTF-8</span>
          <span>LF</span>
        </div>
        <div className="flex items-center space-x-2">
          <span>第 15 行，第 28 列</span>
          <span>空格：4</span>
        </div>
      </div>
    </div>
  );
};

export default App;
