import React, { useState } from 'react'

function user() {
  const [count,setCount]=useState("");

  setCount=()=>{
    <h1>Hello</h1>
  }
  return (
    <div onClick={setCount}>I'm user</div>
  )
}

export default user