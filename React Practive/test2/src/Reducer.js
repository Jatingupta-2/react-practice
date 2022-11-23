import React, { useReducer } from 'react'

function reducer(state, action){
    switch(action.type){
        case 'inc':
            return {count:state.count++}
        case 'dec':
            return {count:state.count--}
        default:
            return;
    }
    

}

const Reducer = () => {

    const [state,dispatch] = useReducer(reducer, {count:1})

  return (
    <div>
        {state.count}
        <button 
        onClick={()=>{dispatch({type :"inc"})}}
        >Increase </button>
    </div>
  )
}

export default Reducer