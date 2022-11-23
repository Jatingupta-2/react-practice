import React, { useEffect, useState } from 'react'

const Memo2 = () => {

    const [a,setA] = useState("")
    const [b,setB] = useState("")
    const [c,setC] = useState("")

    console.log("Re rendering Component")

    const abc = (num) => {

        console.log("Re rendering function sum")

        let i = 0;
        while(i<100000){
            i++
            
        }
        setC("done")
    }

    useEffect(() => {
     
           abc(2)

    }, [b])
    

  return (
    <div>
        <button onClick={()=>setA("a")}>Change A</button>
        <button onClick={()=>setB("a")}>Change B</button>
    </div>
  )
}

export default Memo2