import React,{ useState, useEffect } from "react";

import useLch from './customHook'
const LikeButton :  React.FC = () => {
  let [like, setLike] = useState(0);
  let pos = useLch(1)
  console.log('rend');
  return (
    <>
    <button onClick={() => {setLike(like+1)}}>{like} xxxxxxxxx</button>
    <p>{pos.x},{pos.y} </p>
    </>
  )
}

export default LikeButton