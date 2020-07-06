import React,{ useState, useEffect } from "react";

const LikeButton :  React.FC = () => {
  let [count, setCount] = useState(0)
  let [on, setOn] = useState(true)
  useEffect(() => {
    document.title = `点击了${count}`
  })
  return (
    <>
    <button onClick={() => setCount(count + 1)}>
      点击 {count}
    </button>
    <button onClick={() => setOn(!on)}>
      {on ? 'On' : 'Off'}
    </button>
    </>
  )
}

export default LikeButton