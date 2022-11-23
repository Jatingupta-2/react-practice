import React, { useEffect, useState } from 'react'

const useHook = () =>{
    const [x,setX] = useState(0)
    const [y,setY] = useState(0)

    function handler(event){
        
        setX(event.offsetX)
        setY(event.offsetY)
    }

    useEffect(() => {
      
        window.addEventListener('mousemove',handler)
    
      return () => {
        window.removeEventListener('mousemove',handler)
      }
    }, [])

    return [x,y];
}

const Customhook = () => {

    const [x,y] = useHook()
    

  return (
    <div>
        {x} , {y}
    </div>
  )
}

export default Customhook