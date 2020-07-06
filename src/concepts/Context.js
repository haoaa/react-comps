import React from 'react'

const ThemeContext = React.createContext('light');

class Contextdemo extends React.Component {
  tv = "yellow"
  render() {
    setTimeout(() => {
      this.tv = "black"
    }, 3000)
    return (
      <ThemeContext.Provider value={this.tv}>
        <Toolbar></Toolbar>
      </ThemeContext.Provider>
    )
  }
}
// encodeURIComponent("https://m.shanyhs.com/v2/activity-wh-2020/index.html?channelId=35775")
// encodeURIComponent("https://test.m.shanhs.com.cn/v2/activity-wh-2020/index.html?channelId=35775")
// project/touch/web-view/web-view?url=https%3A%2F%2Ftest.m.shanhs.com.cn%2Fv2%2Factivity-wh-2020%2Findex.html%3FchannelId%3D35775
// https%3A%2F%2Fm.shanhs.com%2Fv2%2Factivity-wh-2020%2Findex.html%3FchannelId%3D68975
// https://m.shanhs.com/v2/activity-wh-2020/index.html?channelId=68975
class ThemedButton extends React.Component {
  static contextType = ThemeContext
  render() {
    return <button>={this.context}</button>;
  }
}

function Toolbar(props) {
  return (
    <div>
      <ThemedButton></ThemedButton>
    </div>
  )
}

export default Contextdemo
