import { useState } from 'react'

import './App.css'
import Counter from './components/Counter'
import ClassChange from './components/ClassChange'

function App() {
  const [count, setCount] = useState("Admin")
  console.log("El componente se ha montado");

  return (
    <>
      <ClassChange />
      <Counter />
      <div className="card">
        {/* operador ternario */}
        <button onClick={() => { count === "Admin" ? setCount("No admin") : setCount("Admin") }}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
