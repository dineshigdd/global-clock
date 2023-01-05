import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>local time: <span>{ Date()}</span></div>
       <div>UTC time<span>Display UTC time</span></div>
       <div>Foriegn time: 
        <select>
          <option>select a country</option>
          <option>india</option>
          <option>Uk</option>
          <option>Argentina</option>
        </select>
       <span>Display the time of the foriegn coutry</span>
       </div>
    </div>
  )
}

export default App
