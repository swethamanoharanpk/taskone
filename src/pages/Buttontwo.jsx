import React, { useReducer } from 'react'

function Buttontwo() {
    const initialvalue = {
        num: 0,
        color: "",
        bckColor: ""
    }
    function display(state,action){
        console.log(action.ok)
        switch(action.ok){
            case "inc":
                return {num:state.num+1, color: state.color=action.clr, bckColor:state.bckColor = action.clrone}
            case "dec":
                return {num:state.num>0? state.num-1 : 0 , color:state.color= action.clr,bckColor:state.bckColor = action.clrtwo}   
            case "reset":
                return {num:0, color:state.color=action.clr, bckColor:state.bckColor = action.clrthree}    

        }

    }
    const [state,dispatch] = useReducer(display,initialvalue)
    

     
    
  return (
    <div>
    <h3 style={{color:state.color}}>{state.num}</h3>
    <button style={{backgroundColor:state.bckColor}} onClick={()=>dispatch({ok:"inc",clrone: "green"})}>Increment</button>
    <button style={{backgroundColor:state.bckColor}} onClick={()=>dispatch({ok:"dec", clrtwo: "red"})}>Decrement</button>
    <button style={{backgroundColor:state.bckColor}} onClick={()=>dispatch({ok:"reset", clrthree: "yellow"})}>Reset</button>
    
    </div>
    
  )
}

export default Buttontwo