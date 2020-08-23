var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from 'react';
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.render = function () {
        var mouse = this.props.mouse;
        return (React.createElement("img", { alt: "x", src: "../logo.svg", style: { position: 'absolute', left: mouse.x, top: mouse.y } }));
    };
    return Cat;
}(React.Component));
var Mouse = /** @class */ (function (_super) {
    __extends(Mouse, _super);
    function Mouse(props) {
        var _this = _super.call(this, props) || this;
        _this.handleMouseMove = _this.handleMouseMove.bind(_this);
        _this.state = { x: 0, y: 0 };
        return _this;
    }
    Mouse.prototype.handleMouseMove = function (event) {
        this.setState({
            x: event.clientX,
            y: event.clientY
        });
    };
    Mouse.prototype.render = function () {
        return (React.createElement("div", { style: { flex: 1, height: '100%' }, onMouseMove: this.handleMouseMove }, this.props.children(this.state)));
    };
    return Mouse;
}(React.Component));
var withMouse = function (Comp) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        class_1.prototype.render = function () {
            var _this = this;
            return (React.createElement(Mouse, null, function (mouse) { return React.createElement(Comp, __assign({}, _this.props, { mouse: mouse })); }));
        };
        return class_1;
    }(React.Component));
};
export default withMouse(Cat);
