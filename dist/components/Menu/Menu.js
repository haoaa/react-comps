import React, { useState } from 'react';
import classNames from 'classnames';
export var MenuContext = React.createContext({ index: '0' });
/**
 * 为网站提供导航功能的菜单。支持横向纵向两种模式，支持下拉菜单。
 * ~~~js
 * import { Menu } from 'antd'
 * ~~~
 */
var Menu = function (props) {
    var className = props.className, defaultIndex = props.defaultIndex, mode = props.mode, style = props.style, children = props.children, onSelect = props.onSelect, defaultOpenSubMenus = props.defaultOpenSubMenus;
    var _a = useState(defaultIndex), curIndex = _a[0], setIndex = _a[1];
    var classes = classNames('menu', className, {
        'menu-vertical': mode === 'vertical',
        'menu-horizontal': mode !== 'vertical',
    });
    var handleClick = function (index) {
        setIndex(index);
        if (onSelect) {
            onSelect(index);
        }
    };
    var passedContext = {
        index: curIndex ? curIndex : '0',
        onSelect: handleClick,
        mode: mode,
        defaultOpenSubMenus: defaultOpenSubMenus
    };
    var renderChildren = function () {
        return React.Children.map(children, function (child, index) {
            var ch = child;
            if (ch.type.displayName === 'MenuItem' || ch.type.displayName === 'SubMenu') {
                return React.cloneElement(ch, { index: index.toString() });
            }
            else {
                console.error('wrong child');
            }
        });
    };
    return (React.createElement("ul", { className: classes, style: style, "data-testid": "test-menu" },
        React.createElement(MenuContext.Provider, { value: passedContext }, renderChildren())));
};
Menu.defaultProps = {
    defaultIndex: '0',
    mode: 'horizontal',
    defaultOpenSubMenus: [],
};
export default Menu;
