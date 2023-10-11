import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div className="App">
        <h1>31LO spotted</h1>
        <form>
            <label htmlFor={"entry"}></label>
            <textarea rows={"4"} cols={"50"} className={"entry"} id={"entry"} placeholder={"napisz coś..."}></textarea>
        </form>
    </div>

  )
}

export default App
