import { useEffect, useState } from "react";

const useMouseMove = () =>{
    const [x,setX] = useState(0)
    const [y,setY] = useState(0)
    
    function handler(event){
    
        setX(event.offsetX);
        setY(event.offsetY);
    
    }
    
    useEffect(()=>{
        window.addEventListener('mousemove',handler)
    
        return () =>{
            window.removeEventListener('mousemove',handler)
        }
    },[])

    return [x,y]
}

const CustomHook = () =>{

    const [x,y] = useMouseMove()


    return (
    <>
    X - {x}
    Y - {y}
    </>
)
}

const CustomHookFinal = () =>{
    const [x,y] = useMouseMove()
    return (
        <>
        <CustomHook />
        X - {Math.sqrt(x)}<br />
        Y - {Math.sqrt(y)}
        </>
    )
}

export default CustomHookFinal;