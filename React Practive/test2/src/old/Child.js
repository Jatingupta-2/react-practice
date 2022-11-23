import React, { useEffect, useRef, useState } from 'react'
import debounce from 'lodash/debounce'

const Child = () => {

    const [x,setX] = useState("")

    const myRef = useRef(null)

    // const apiCall = (x) =>{
    //     console.log("API Call "+x)
    // }

    // const debounceFn = useRef(debounce(apiCall,1000))

    // useEffect(() => {
    //  debounceFn.current(x)
    // }, [x])
    
    const handle = () =>{
        console.log(myRef.current.value)
        myRef.current.value = ""
        myRef.current.focus()
    }

  return (
    <>
    {/* <input 
    type="text"
    onChange={(e)=>setX(e.target.value)}
    /> */}
    <input 
    type="text"
    ref={myRef}
    />
    <button 
    onClick={handle}
    >Here</button>
    </>
  )
}

export default Child