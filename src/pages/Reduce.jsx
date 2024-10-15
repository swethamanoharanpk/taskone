import React, { useReducer} from 'react'

function Reduce() {

    const initialvalue = {
        num: 0,
        color: "blue"
    }

    function display(state,action){
        console.log(action.ok)
        switch(action.ok){
            case "inc":
                return {num:state.num+1, color: state.color=action.clr}
            case "dec":
                return {num:state.num>0? state.num-1 : 0 , color:state.color= action.clr}   
            case "reset":
                return {num:0, color:state.color=action.clr}    

        }

    }

    const [state,dispatch] = useReducer(display,initialvalue)

    
  return (
    <div>
    <h3 style={{color:state.color}}>{state.num}</h3>
    <button style={{backgroundColor:state.color}} onClick={()=>dispatch({ok:"inc",clr: "green"})}>Increment</button>
    <button style={{backgroundColor:state.color}} onClick={()=>dispatch({ok:"dec", clr: "red"})}>Decrement</button>
    <button style={{backgroundColor:state.color}} onClick={()=>dispatch({ok:"reset", clr: "yellow"})}>Reset</button>
    
    
    
    </div>
  )
}

export default Reduce