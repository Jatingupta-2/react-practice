import { debounce } from 'lodash'
import React, { useCallback, useEffect, useRef, useState } from 'react'

const Debounce = () => {

    const [x, setX] = useState(1)

    const apiCall1 = () =>{
        console.log("API called")
    }

    // const apiCall = useCallback(debounce(apiCall1,400),[])

    const apiCallUseRef = useRef(debounce(apiCall1,400))
    

    useEffect(() => {
        apiCallUseRef.current()
        // apiCall();
    }, [x])
    

  return (
    <div>
        <input onChange={()=>setX((prev)=>prev+1)} />
        {/* <button onClick={()=>setX((prev)=>prev+1)}>Click me</button> */}
    </div>
  )
}

export default Debounce;