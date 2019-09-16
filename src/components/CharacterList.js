import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

  const [characterList, setCharacterList] = useState([{}]) 
  useEffect(() => {
    // Make a request for a user with a given ID
  axios.get('https://rickandmortyapi.com/api/character/')
  .then(function (response) {
    // handle success
    console.log(response.data.results);
    setCharacterList(response.data.results)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })

    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <section className="character-list grid-view">

      {characterList.map((character, index) => (
        <CharacterCard character={character} key={index}/>
      ))}

    </section>
  );
}
