import React, { useState } from 'react'
import {styled} from 'styled-components'
const Box = styled.div`
width: 900px;
height: 200px;
display: flex;
align-items: center;
justify-content: center;
`

const Sub = styled.div`
display:flex;
flex-direction: column;
align-items:center;
margin-botton: 90px;
`

function Hello() {

    const [data,setData]= useState({
        username: "",
        place: "",
        email: "",
        mobile: "number",
    })
    function display(e){
      const {name,value} = e.target
      //console.log(name)
      setData({...data , [name] : value})

    }
    function change(){
      console.log(data)


    }
  return (
    <Box>
    <Sub>
    <input type="text" placeholder='name' name='username' onChange={display}/>
    <input type="text" placeholder='place' name='place' onChange={display}/>
    <input type="email" placeholder='email' name='email' onChange={display}/>
    <input type="number" placeholder='mobile' name='mobile' onChange={display}/>
    <button onClick={change}>Submit</button>
    
    </Sub>
    

    </Box>
  )
}

export default Hello