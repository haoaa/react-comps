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
import React from 'react';
var ThemeContext = React.createContext('light');
var Contextdemo = /** @class */ (function (_super) {
    __extends(Contextdemo, _super);
    function Contextdemo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tv = "yellow";
        return _this;
    }
    Contextdemo.prototype.render = function () {
        var _this = this;
        setTimeout(function () {
            _this.tv = "black";
        }, 3000);
        return (React.createElement(ThemeContext.Provider, { value: this.tv },
            React.createElement(Toolbar, null)));
    };
    return Contextdemo;
}(React.Component));
// encodeURIComponent("https://m.shanyhs.com/v2/activity-wh-2020/index.html?channelId=35775")
// encodeURIComponent("https://test.m.shanhs.com.cn/v2/activity-wh-2020/index.html?channelId=35775")
// project/touch/web-view/web-view?url=https%3A%2F%2Ftest.m.shanhs.com.cn%2Fv2%2Factivity-wh-2020%2Findex.html%3FchannelId%3D35775
// https%3A%2F%2Fm.shanhs.com%2Fv2%2Factivity-wh-2020%2Findex.html%3FchannelId%3D68975
// https://m.shanhs.com/v2/activity-wh-2020/index.html?channelId=68975
var ThemedButton = /** @class */ (function (_super) {
    __extends(ThemedButton, _super);
    function ThemedButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ThemedButton.prototype.render = function () {
        return React.createElement("button", null,
            "=",
            this.context);
    };
    ThemedButton.contextType = ThemeContext;
    return ThemedButton;
}(React.Component));
function Toolbar(props) {
    return (React.createElement("div", null,
        React.createElement(ThemedButton, null)));
}
export default Contextdemo;
