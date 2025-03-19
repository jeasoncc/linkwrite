const fs = require("fs");
const path = require("path");
const { fromEvent } = require("rxjs");
const { debounceTime, throttleTime } = require("rxjs/operators");

// 检查参数数量
if (process.argv.length < 3) {
    console.log("用法: node create-react-component.js <组件名称>");
    process.exit(1);
}

// 将所有参数合并为一个以横杠连接的名称
const component_name = process.argv.slice(2).join("-");
const component_dir = path.join("src", "pro-components", component_name);

// 将组件名称转换为大驼峰命名法
const component_name_camel = component_name
    .split("-")
    .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join("");

// 检查目录是否已存在
if (fs.existsSync(component_dir)) {
    console.log(`目录 '${component_dir}' 已存在，无法创建。`);
    process.exit(1);
}

// 创建目录
fs.mkdirSync(component_dir, { recursive: true });

// 创建 React 文件
const react_file = path.join(component_dir, "index.tsx");
const react_content = `// 组件名称: ${component_name}
// 作者: Martin
// 创建日期: ${new Date().toISOString().slice(0, 19).replace("T", " ")}
// 描述: 这是一个自动生成的组件文件

import React, { useEffect } from 'react';
import { fromEvent } from 'rxjs';
import { debounceTime, throttleTime } from 'rxjs/operators';
import './index.scss';

// 模拟数据
import items from './data.json';
import { Item } from './index.scheme';

const ${component_name_camel}: React.FC = () => {
    useEffect(() => {
        const clickStream = fromEvent(document, 'click').pipe(
            debounceTime(300),
            throttleTime(500)
        );

        const subscription = clickStream.subscribe(() => {
            console.log('Document clicked!');
        });

        return () => {
            subscription.unsubscribe();
        };
    }, []);

    const handleClick = (item: Item) => {
        console.log('Clicked item:', item);
    };

    return (
        <div className="${component_name}__container">
            <h1>${component_name}</h1>
            {items.map((item: Item, index: number) => (
                <div
                    key={index}
                    className="${component_name}__item"
                    onClick={() => handleClick(item)}
                >
                    {item.firstName} {item.lastName}
                </div>
            ))}
        </div>
    );
};

export default ${component_name_camel};`;
fs.writeFileSync(react_file, react_content);

// 创建 SCSS 文件
const scss_file = path.join(component_dir, "index.scss");
const scss_content = `/* 仅适用于 ${component_name} 组件的样式 */

.${component_name}__container {
    padding: 20px;
    border: solid 1px red;
}

.${component_name}__item {
    margin: 10px 0;
    padding: 10px;
    border: 1px solid #ccc;
    cursor: pointer;
    transition: background - color 0.3s;

    &:hover {
        background - color: #e0e0e0;
    }
}`;
fs.writeFileSync(scss_file, scss_content);

// 创建测试文件
const test_file = path.join(component_dir, "index.test.tsx");
const test_content = `import React from 'react';
import { render } from '@testing-library/react';
import ${component_name_camel} from './index';

test('renders component', () => {
    render(<${component_name_camel} />);
});`;
fs.writeFileSync(test_file, test_content);

// 创建 JSON 文件
const json_file = path.join(component_dir, "data.json");
const json_data = [];
for (let i = 1; i <= 3; i++) {
    json_data.push({
        firstName: `FirstName${i}`,
        lastName: `LastName${i}`,
    });
}
const json_content = JSON.stringify(json_data, null, 2);
fs.writeFileSync(json_file, json_content);

// 创建类型声明文件
const scheme_file = path.join(component_dir, "index.scheme.ts");
const scheme_content = `export interface Item {
    firstName: string;
    lastName: string;
}`;
fs.writeFileSync(scheme_file, scheme_content);

console.log(`组件 '${component_name}' 创建成功！`);
