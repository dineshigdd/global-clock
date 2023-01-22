import { useState , useEffect, useRef} from 'react'
import { Wrapper, Section } from './Styles';
import WorldMap from './map/WorldMap';
// import { Section } from  './App';
// import reactLogo from './assets/react.svg'



function App() {  


 const [ currentDateAndTime, setCurrentDateAndTime ] = useState<string>( new Date().toString());



//  useEffect(()=>{
//     const date = new Date();
//     setCurrentDateAndTime( date );
//  },[]);
  return (
    <Wrapper className="App">
      <Section>
        <span className='currentLocation'>Current Location & Time</span>
        <span className='currentLocation'>{ currentDateAndTime }</span>
      </Section>
     
      {/* <Section><span>Foriegn city </span> */}
        
          {/* <select>
            <option>select a country</option>
            <option>india</option>
            <option>Uk</option>
            <option>Argentina</option>
          </select> */}
        {/* <span>Time of the foriegn coutry</span> */}
       {/* </Section> */}
      <Section>
        <WorldMap />
      </Section>
      
    </Wrapper>
  )
}

export default App