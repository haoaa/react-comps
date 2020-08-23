import React, { useState, useEffect } from "react";
var LikeButton = function () {
    var _a = useState(0), count = _a[0], setCount = _a[1];
    var _b = useState(true), on = _b[0], setOn = _b[1];
    useEffect(function () {
        document.title = "\u70B9\u51FB\u4E86" + count;
    });
    return (React.createElement(React.Fragment, null,
        React.createElement("button", { onClick: function () { return setCount(count + 1); } },
            "\u70B9\u51FB ",
            count),
        React.createElement("button", { onClick: function () { return setOn(!on); } }, on ? 'On' : 'Off')));
};
export default LikeButton;
