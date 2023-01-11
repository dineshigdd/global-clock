import { useState , useEffect} from 'react'
import WorldMap from './map/WorldMap';
// import reactLogo from './assets/react.svg'

import './App.css'

function App() {
  const [coords, setCorrds] = useState({
    latitude: "",
    longitude: ""
  });

 const [display_name, setName] = useState("");
 const [address, setAddress] = useState({});

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
       <section><WorldMap /></section>
    </div>
  )
}

export default App
