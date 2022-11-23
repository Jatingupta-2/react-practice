import React, { createContext, useContext } from 'react'

const themeCtx =  createContext();


const Text = () =>{
    const {newVal} = useContext(themeCtx)
    return <h1>{newVal}</h1>
}

const Display = () =>{
    return <Text></Text>
}

const Context2 = () => {
  return (
    <themeCtx.Provider value={{newVal:"abc"}}>
        <Display />
    </themeCtx.Provider>
  )
}

export default Context2