import { useReducer } from "react";

function recuderDispatch(state,action){

    switch(action){
        case "inc":
            return{count:state.count+1}
        case "dec":
            return{count:state.count-1}
        default:
            throw new Error("Action not found!")
    }

}

const Reducer = () =>{

    const [state,action] = useReducer(recuderDispatch,{count:0})

    return(
        <>
        {state.count}
        <button onClick={()=>{action("inc")}}>INC</button>
        <button onClick={()=>{action("dec")}}>DEC</button>
        </>
    )

}

export default Reducer;