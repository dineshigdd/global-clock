import { useState } from 'react'
import reactLogo from './assets/react.svg'
import fakeDbEvents from './assets/fakeEvents.json';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <section><span>current location</span><span>current Date and time</span></section>
      <section>Foriegn city 
          <select>
            <option>select a country</option>
            <option>india</option>
            <option>Uk</option>
            <option>Argentina</option>
          </select>
        <span>Time of the foriegn coutry</span>
       </section>
       <section>Map</section>
    </div>
  )
}

export default App
