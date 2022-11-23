import React, { useState } from 'react'

const theme = React.createContext();

const Text2 = () =>{
    const {value1,value2} = React.useContext(theme);
    const [value,setValue] = value1
    return <>
        <h1>
            {value1}
            <button onClick={()=>setValue(33)}>Click Me</button>
        </h1>
    </>
}

const Text1 = () => {
    return <>
        <Text2 />
    </>
}

const Context = () => {

    const [first, setFirst] = useState("1")
    const [second, setSecond] = useState("2")
  return (
    <>
    <theme.Provider value={{value1:[first, setFirst],value2:[second, setSecond]}}>
        <Text1 />
    </theme.Provider>
    </>
    
  )
}

export default Context