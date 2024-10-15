import React, { useReducer, useRef } from 'react'

function Button() {
    const initialvalue = {
        num: 0,
        color: "blue"
    }
    function display(state,action){
        console.log(action.ok)
        switch(action.ok){
            case "inc":
                return {num:state.num+1, color: action.clr}
            case "dec":
                return {num:state.num>0? state.num-1 : 0 , color:state.color= action.clr}   
            case "reset":
                return {num:0, color:state.color=action.clr}    

        }

    }
    const [state,dispatch] = useReducer(display,initialvalue)
    

     
    const a = useRef()
    const b = useRef()
    const c = useRef()
    function changeColorOne(){
        dispatch({ok: "inc",clr: "green"})
        a.current.style.backgroundColor = "green"
        b.current.style.backgroundColor = ""
        c.current.style.backgroundColor = ""
    }
    function changeColorTwo(){
        dispatch({ok: "dec",clr: "red"})
        a.current.style.backgroundColor = ""
        b.current.style.backgroundColor = "red"
        c.current.style.backgroundColor = ""
    }
    function changeColorThree(){
        dispatch({ok: "reset",clr: "yellow"})
        a.current.style.backgroundColor = ""
        b.current.style.backgroundColor = ""
        c.current.style.backgroundColor = "yellow"
    }
    
  return (
    <div>
    <h3 style={{color:state.color}}>{state.num}</h3>
    <button ref={a} onClick={changeColorOne}>Increment</button>
    <button ref={b} onClick={changeColorTwo}>Decrement</button>
    <button ref={c} onClick={changeColorThree}>Reset</button>
    
    </div>
  )
}

export default Button