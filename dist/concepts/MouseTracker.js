import React, { useState } from "react";
import useLch from './customHook';
var LikeButton = function () {
    var _a = useState(0), like = _a[0], setLike = _a[1];
    var pos = useLch(1);
    console.log('rend');
    return (React.createElement(React.Fragment, null,
        React.createElement("button", { onClick: function () { setLike(like + 1); } },
            like,
            " xxxxxxxxx"),
        React.createElement("p", null,
            pos.x,
            ",",
            pos.y,
            " ")));
};
export default LikeButton;
