import React, { useEffect, useState } from "react";
import axios from "axios";
import LocationCard from './LocationCard';

export default function LocationsList() {

    const [characterLocation, setCharacterLocation] = useState([]) 
  useEffect(() => {
    // Make a request for a user with a given ID
  axios.get('https://rickandmortyapi.com/api/location/')
  .then(function (response) {
    // handle success
    console.log(response.data.results);
    setCharacterLocation(response.data.results)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })

  }, []);
  return (
    <section className="character-list grid-view">

      {characterLocation.map((location, index) => (
          <LocationCard location={location} key={index}/>
      ))}

    </section>
  );
}
