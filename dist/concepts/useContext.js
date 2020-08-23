import React, { useContext } from "react";
var themes = {
    light: {
        foreground: "#000000",
        background: "#eeeeee"
    },
    dark: {
        foreground: "#ffffff",
        background: "#222222"
    }
};
var ThemeContext = React.createContext(themes.light);
function App() {
    var c = themes.dark;
    setTimeout(function () {
        c = themes.light;
    }, 2000);
    return (React.createElement(ThemeContext.Provider, { value: c },
        React.createElement(Toolbar, null)));
}
function Toolbar() {
    var theme = useContext(ThemeContext);
    return (React.createElement("button", { style: { background: theme.background, color: theme.foreground } }, "I am styled by theme context!"));
}
export default App;
