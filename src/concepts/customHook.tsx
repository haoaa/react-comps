import React,{ useState, useEffect } from "react";
export default  useLch
function useLch(params:any) {
  let [pos, setPos] = useState({x: 0, y: 0})

  useEffect(() => {
    const updateMouse = (e: MouseEvent) => {
      console.log(e.clientX);
      setPos({x: e.clientX, y: e.clientY})
    }
    console.log('eff');
    
    document.addEventListener('click', updateMouse)
    
    return () => {
      console.log('def');
      
      document.removeEventListener('click', updateMouse)
    }
  }, [])
  return pos
}
  