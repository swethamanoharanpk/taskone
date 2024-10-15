import React from 'react'
import { Appcontext } from './context'

function Sample({children}) {


    const person = {
        name : "swetha",
        age : 22,
        place : "kannur"
      }


  return (
    <div>
    <Appcontext.Provider value = {person}>
    {children}
    </Appcontext.Provider>
    </div>
  )
}

export default Sample