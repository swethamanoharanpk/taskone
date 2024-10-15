import React, { useReducer } from "react";
const initialValue = {
    count: 0,
    color: "blue"
}
export const Red = ()=>{
    function reducer(state,action){
        switch(action.ok){
            case "inc" :
                return {count:state.count+1 , color: state.color= action.clr}
            case "dec" :
                return{count:state.count-1 , color: state.color= action.clr}
            case "reset" :
                return {count:0 , color: state.color = action.clr}        
        }

    }
    const[state,dispatch] = useReducer(reducer,initialValue)
    return(
        <div>
        <h2>{state.count}</h2>
        <button style={{backgroundColor:state.color}} onClick={()=>dispatch({ok:"inc",clr:"red"})}>Increment</button>
        <button style={{backgroundColor:state.color}} onClick={()=>dispatch({ok:"dec",clr:"green"})}>Decrement</button>
        <button style={{backgroundColor:state.color}} onClick={()=>dispatch({ok:"reset",clr:"violet"})}>Reset</button>
        </div>
    )
}