// 组件名称: layout-home
// 作者: Martin
// 创建日期: 2024-12-09 15:08:50
// 描述: 这是一个自动生成的组件文件

import React, { ReactNode, useEffect } from 'react';
import { fromEvent } from 'rxjs';
import { debounceTime, throttleTime } from 'rxjs/operators';
import './index.scss';

import { Item } from './index.scheme';

interface LayoutHome {
    main?: ReactNode;
    sidebar?: ReactNode;
    outline?: ReactNode;
}
const LayoutHome: React.FC<LayoutHome> = ({ main, sidebar, outline }) => {
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
        <div className="layout-home__container">
            {sidebar}
            {main}
            {outline}
        </div>
    );
};

export default LayoutHome;
