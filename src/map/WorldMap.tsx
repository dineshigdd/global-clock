import Map from "./Map";
import { useEffect, useState } from "react";
import { Section, Wrapper } from "../Styles";

export default function WorldMap() {


  
  const [ currentLocation, setCurrentLocation ] = useState({
    latitude: 0,
    longitude:0,
    display_name: '',
  });

  const [coords, setCorrds] = useState({
    latitude: 0,
    longitude:0
  });

  const [display_name, setName] = useState("");

  interface Address {
    street : string,
    city : string,
    state: string,
    country: string,
    postalcode: string,
  };

  
  const [ address  , setAddress] = useState<Address>({
    street : '',
    city : '',
    state: '',
    country: '',
    postalcode: '',
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      getCurrentCityName,
      error,
      options
    );
  }, []);

  function error(err: any) {
    if (
      err.code === 1 || //if user denied accessing the location
      err.code === 2 || //for any internal errors
      err.code === 3 //error due to timeout
    ) {     
      alert(err.message);
    } else {
      alert(err);
    }
  }

  const options = {
    enableHighAccuracy: true,
    maximumAge: 30000,
    timeout: 27000
  };

  //get current location when the app loads for the first time
  function getCurrentCityName(position : any) {  
      
    
      let url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=
          ${ position.coords.latitude }&lon=${ position.coords.longitude }`;
      
      fetch(url, {
        method: "GET",
        mode: "cors",
        headers: {
          "Access-Control-Allow-Origin": "https://o2cj2q.csb.app"
        }
      })
        .then((response) => response.json())
        .then((data) => setName( `${ data.address.city }, ${ data.address.country }` ));

        setCurrentLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          display_name:display_name
        });
  }

  //get input from text fields and append it to address object
  function update(field : any) {
    return (e:any) => {
      const value = e.currentTarget.value;
      setAddress((address) => ({ ...address, [field]: value }));
    };
  }

  //send the data on the state to the API
  function getData(url:string) {
    fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "https://o2cj2q.csb.app"
      }
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        setName(data[0].display_name);
        setCorrds({
          latitude: data[0].lat,
          longitude: data[0].lon
        });
      })
      .catch(() => error("Please Check your input"));
  }

  //set form input( data entered ) to state on form submit
  function submitHandler(e:any) {
    e.preventDefault();
    console.log(address);

    let url = `https://nominatim.openstreetmap.org/search?city=${address.city}&format=json`;
    
    /*let url = `https://nominatim.openstreetmap.org/search?
    street=${address.street}
    &city=${address.city}
    &state=${address.state}
    &country=${address.country}
    &postalcode=${address.postalcode}&format=json`;*/

    getData(url);
  }

  return (
    <Wrapper className="WorldMap">
       <Section className="form-container">
        <form>
          {/* <label>street:</label>
          <input
            value={address.street}
            placeholder="1234 abc street"
            onChange={update("street")}
            id="street"
            type="text"
          /> */}
          <label>Enter the city </label>
          <input
            placeholder="Los Angeles"
            type="text"
            value={address.city}
            onChange={update("city")}
            id="city"
          />
          {/* <br />
          <label>State:</label>
          <input
            placeholder="CA / California"
            type="text"
            value={address.state}
            onChange={update("state")}
            id="state"
          />
          <label>zip code:</label>
          <input
            placeholder="91423"
            type="text"
            value={address.postalcode}
            onChange={update("postalcode")}
            id="postalcode"
          />
          <br />
          <label>Country:</label>
          <input
            placeholder="USA"
            type="text"
            value={address.country}
            onChange={update("country")}
            id="country"
          />
          <br /> */}

          <button onClick={(e) => submitHandler(e)}>Search</button>
        </form>
      </Section>
      <Map 
      currentLocation = { currentLocation } 
      location = {{ coords, display_name }} />
    </Wrapper>
  );
}