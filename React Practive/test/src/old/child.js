import { useEffect, useRef, useState } from "react";
import debounce from 'lodash/debounce'

const Child = () => {

    const [x, setX] = useState("")

    function submit(){
        console.log(x);
    }

    function apiCall(x){
        console.log("API is called "+x);
    }

    const debouceRef = useRef(debounce(apiCall,2000))

    useEffect(()=>{
        debouceRef.current(x)
    },[x])

    return(
        <div>
            
            <input 
                onChange={(e)=>{setX(e.target.value)}}
            />
            <button onClick={submit}>Submit</button>
        </div>
    )
}

export default Child;