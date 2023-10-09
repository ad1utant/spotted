import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div className="App">
        <h1>31LO spotted</h1>
        <form>
            <label htmlFor={"entry"}></label>
            <input type={"text"} id={"entry"} name={"entry"} placeholder={"napisz coś..."}></input>
        </form>
    </div>

  )
}

export default App
