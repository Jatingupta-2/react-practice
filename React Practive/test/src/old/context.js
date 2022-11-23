import React, { createContext } from 'react'

const themeContext = createContext();

const Text = () => {
    const { value, value2 } = React.useContext(themeContext);
    const [stateValue, setStateValue] = value;
    const [stateValue2, setStateValue2] = value2;

    return (
        <div>
            <h1>The value is: {stateValue}</h1>
            <h1>The value2 is: {stateValue2}</h1>
            <button onClick={()=>{setStateValue("abc")}}>Click for 1</button>
        </div>
    );


    // Approach Primitive
    // return (
    //     <themeContext.Consumer>
    //     {
    //         (theme)=>{
    //             return <h1 style={{'color':theme}}>Hey</h1>
    //         }
    //     }
        
    //     </themeContext.Consumer>
    // )
}

const Display = () => {
    return (
        <Text>Hi</Text>
    )
}

const Context = () => {
    const [value, setValue] = React.useState("foo");
    const [value2, setValue2] = React.useState("joo");
    return (
        <themeContext.Provider value={{ value: [value, setValue], value2: [value2, setValue2] }}>
            <Display />
        </themeContext.Provider>
    )
}

export default Context;