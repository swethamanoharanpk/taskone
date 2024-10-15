import React, { useRef } from 'react'

function Hai() {
     const a = useRef()
     const b = useRef()
     const c = useRef()
     
     function display(){
        var name = a.current.value
        var email = b.current.value
        var password = c.current.value
        console.log(name,email,password)
     }
  return (
    <div>
    <input ref={a} type="text" placeholder='name' />
    <input ref={b} type="email" placeholder='email' />
    <input ref={c} type="password" placeholder='password' />
    <button onClick={display}>click</button>
    </div>
  )
}

export default Hai