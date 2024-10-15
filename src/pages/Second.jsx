import React, { useRef } from 'react'
import {useNavigate, useParams} from 'react-router-dom'

function Second() {

    const navigate = useNavigate()
    setTimeout(()=>{
         navigate('/')
     },3000)



    const d = useParams()
    console.log(d.value)

    
    const data = useRef()
    function display(){
      data.current.style.backgroundColor = "red"
    }


  return (
    <div>
    <div></div>
    <h2>second page{d.value}</h2>
    </div>
    
  
    
    
    
  )
}

export default Second