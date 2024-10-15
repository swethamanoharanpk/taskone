import React from 'react'
import { Link } from 'react-router-dom'

function First() {

    var b = "React"
  return (
    <div>

    <h1>First page</h1>
    <Link to={`/second/${b}`}><button>Button</button></Link>
    </div>
  )
}

export default First