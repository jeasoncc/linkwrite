// 组件名称: foo-bar
// 作者: Martin
// 创建日期: 2024-10-14 15:00:40
// 描述: 这是一个自动生成的组件文件

import React, { useEffect } from 'react';
import { fromEvent } from 'rxjs';
import { debounceTime, throttleTime } from 'rxjs/operators';
import './index.scss';

// 模拟数据
import items from './data.json';
import { Item } from './index.scheme';

const FooBar: React.FC = () => {
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
        <div className="foo-bar__container">
            <h1>foo-bar</h1>
            {items.map((item: Item, index: number) => (
                <div
                    key={index}
                    className="foo-bar__item"
                    onClick={() => handleClick(item)}
                >
                    {item.firstName} {item.lastName}
                </div>
            ))}
        </div>
    );
};

export default FooBar;