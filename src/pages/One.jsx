import React, { useContext } from 'react'
import { Appcontext } from './context'


function One() {



    const data = useContext(Appcontext)
    console.log(data)
  return (
    <div><h1>{data.place}</h1></div>
  )
}

export default One