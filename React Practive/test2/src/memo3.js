import React, { useCallback, useMemo, useState } from 'react'


const ListItem = ({listItem}) =>{
    console.log("re render"+listItem)
    return  <p>{listItem}</p>
}

// const ListItem = React.memo(({ listItem }) => {
//     console.log("re render" + listItem)
//     return <p>{listItem}</p>
// })

const expensiveCalculation = (num) => {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {
      num += 1;
    }
    return num;
  };

  
  const Child = () => {
    // console.log("re rendering child compo")
    return <h1>Hey</h1>
  }
  

const Memo = () => {

    const [input, setInput] = useState("")
    const [list, setList] = useState([])
    const [checkbox, setcheckbox] = useState(false)

    // if(checkbox){

        let calc2Memo = useMemo(()=>expensiveCalculation(212121),[])
        let calc2CB = useCallback((val)=>expensiveCalculation(val),[])
        
        if(checkbox){
            let sum = calc2Memo
            console.log(sum)

            
            let sum2 = calc2CB(Math.random())
            console.log(sum2)

            //Use usecallback when we want to return memoized funxtion so that we can change args and get a new value after function execution

            //useMemo returns a memoized value of the function call
            //runs faster


            // calcTest()
            // expensiveCalculation(212121)
        }
    // }

   
    async function createList(value) {

        console.log("re render")
        // const expensiveCall = (value) => {
            
            
        //     return new Promise(resolve => {
        //         return setTimeout(() => {
        //             resolve("resolved")
        //         }, 5000);
        //     }
        //     )
        // }
    

        // if (value[value.length - 1] === 'e') {
            // console.log('Her')
            // let res = await expensiveCall(value);
            // console.log(res)
        // }

        setInput(value);
        let last = value[value.length - 1]
        setList((prev) => { return [...prev, last] })

    }

    return (
        <>
            <input
                value={input}
                onChange={(e) => createList(e.target.value)}
            />
            {list.map((listItem, index) => { return <ListItem key={index} listItem={listItem} /> })}
            <Child></Child>
            <input 
            type="checkbox"
            value = {checkbox}
            onClick={()=>{setcheckbox((prev)=>!prev)}}
            />
        </>
    )
}

export default Memo;