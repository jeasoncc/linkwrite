#!/bin/bash

# 检查参数数量
if [ "$#" -lt 1 ]; then
    echo "用法: bash create-react-component.sh <组件名称>"
    exit 1
fi

# 将所有参数合并为一个以横杠连接的名称
component_name=$(echo "$@" | tr ' ' '-')
component_dir="src/ui/$component_name"

# 将组件名称转换为大驼峰命名法
component_name_camel=$(echo "$component_name" | awk -F- '{for(i=1;i<=NF;i++) $i=toupper(substr($i,1,1)) substr($i,2); print $0}' OFS='')

# 检查目录是否已存在
if [ -d "$component_dir" ]; then
    echo "目录 '$component_dir' 已存在，无法创建。"
    exit 1
fi

# 创建目录
mkdir -p "$component_dir"

# 创建 React 文件
react_file="$component_dir/index.tsx"
cat <<EOL > "$react_file"
// 组件名称: ${component_name}
// 作者: Martin
// 创建日期: $(date +"%Y-%m-%d %H:%M:%S")
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

export default ${component_name_camel};
EOL

# 创建 SCSS 文件
scss_file="$component_dir/index.scss"
cat <<EOL > "$scss_file"
/* 仅适用于 ${component_name} 组件的样式 */

.${component_name}__container {
    padding: 20px;
    border: solid 1px red;
}

.${component_name}__item {
    margin: 10px 0;
    padding: 10px;
    border: 1px solid #ccc;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #e0e0e0;
    }
}
EOL

# 创建测试文件
test_file="$component_dir/index.test.tsx"
cat <<EOL > "$test_file"
import React from 'react';
import { render } from '@testing-library/react';
import ${component_name_camel} from './index';

test('renders component', () => {
    render(<${component_name_camel} />);
});
EOL

# 创建 JSON 文件
json_file="$component_dir/data.json"
cat <<EOL > "$json_file"
[$(for i in $(seq 1 3); do echo "{\"firstName\": \"FirstName$i\", \"lastName\": \"LastName$i\"},"; done | sed '$ s/,$//')]
EOL

# 创建类型声明文件
scheme_file="$component_dir/index.scheme.ts"
cat <<EOL > "$scheme_file"
export interface Item {
    firstName: string;
    lastName: string;
}
EOL

echo "组件 '$component_name' 创建成功！"
