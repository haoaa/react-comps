import React, { useContext } from 'react';
import classNames from 'classnames';
import { MenuContext } from "./Menu";
var MenuItem = function (props) {
    var className = props.className, disabled = props.disabled, index = props.index, style = props.style, children = props.children;
    var cxt = useContext(MenuContext);
    var classes = classNames('menu-item', className, {
        'is-disabled': disabled,
        'is-active': cxt.index === index
    });
    var handleClick = function (e) {
        if (cxt.onSelect && !disabled && index) {
            cxt.onSelect(index);
        }
    };
    return (React.createElement("li", { className: classes, style: style, onClick: handleClick }, children));
};
MenuItem.displayName = 'MenuItem';
export default MenuItem;
