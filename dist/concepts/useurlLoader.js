import { useState, useEffect } from 'react';
import axios from 'axios';
var useURLLoader = function (url, deps) {
    if (deps === void 0) { deps = []; }
    var _a = useState(null), data = _a[0], setData = _a[1];
    var _b = useState(false), loading = _b[0], setLoading = _b[1];
    useEffect(function () {
        setLoading(true);
        axios.get(url).then(function (result) {
            setData(result.data);
            setLoading(false);
        });
    }, deps);
    return [data, loading];
};
export default useURLLoader;
