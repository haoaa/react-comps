import React, { useState } from 'react';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import './App.css';
import Ontext from './components/Button/Button';
import Menu from './components/Menu/Menu';
import MenuItem from './components/Menu/MenuItem';
import SubMenu from './components/Menu/SubMenu';
import Icon from "./components/Icon/icon";
import Transition from "./components/Transition/transition";
library.add(fas);
function App() {
    var _a = useState(true), show = _a[0], ss = _a[1];
    return (React.createElement("div", { className: "App" },
        React.createElement(Icon, { icon: 'arrow-down', theme: 'success', size: "sm" }),
        React.createElement(Ontext, { disabled: show, onClick: function (e) { e.stopPropagation(); } }, "ssss"),
        React.createElement(Ontext, { size: 'lg', autoFocus: true, btnType: "primary" }, "ssss"),
        React.createElement(Ontext, { size: 'sm', href: "baidu.com" }, "ssss"),
        React.createElement(Ontext, { size: 'sm', btnType: "danger" }, "ssss"),
        React.createElement(Ontext, { size: 'sm', btnType: "link", target: "_blank", href: "baidu.com" }, "ssss"),
        React.createElement("button", { onClick: function () { ss(!show); } },
            "show ",
            show),
        React.createElement(Transition, { in: show, timeout: 300, animation: 'zoom-in-left' },
            React.createElement("section", null,
                React.createElement("div", null, "Lorem ipsum dolor sit amet."),
                React.createElement("div", null, "Lorem ipsum dolor sit amet."),
                React.createElement("div", null, "Lorem ipsum dolor sit amet."),
                React.createElement("div", null, "Lorem ipsum dolor sit amet."),
                React.createElement(Ontext, { size: 'sm', btnType: "danger" }, "ssss"))),
        React.createElement(Menu, { defaultIndex: '0', mode: 'horizontal', onSelect: function (index) { return console.log("clicked " + index + " item"); } },
            React.createElement(MenuItem, null,
                "active",
                React.createElement(Icon, { icon: 'arrow-up', theme: 'danger', size: 'xs' })),
            React.createElement(MenuItem, { disabled: true }, "disabled"),
            React.createElement(MenuItem, null, "xyz"),
            React.createElement(SubMenu, { title: "dropdown" },
                React.createElement(MenuItem, null, "drop1")),
            React.createElement(SubMenu, { title: "opened" },
                React.createElement(MenuItem, null, "opened1"),
                React.createElement(MenuItem, null, "opened1"))),
        React.createElement("input", { type: "file", id: "input", multiple: true })));
}
export default App;
