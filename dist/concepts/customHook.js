import { useState, useEffect } from "react";
export default useLch;
function useLch(params) {
    var _a = useState({ x: 0, y: 0 }), pos = _a[0], setPos = _a[1];
    useEffect(function () {
        var updateMouse = function (e) {
            console.log(e.clientX);
            setPos({ x: e.clientX, y: e.clientY });
        };
        console.log('eff');
        document.addEventListener('click', updateMouse);
        return function () {
            console.log('def');
            document.removeEventListener('click', updateMouse);
        };
    }, []);
    return pos;
}
