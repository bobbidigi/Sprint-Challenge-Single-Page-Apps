import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Episode from './Episode'

export default function Episodes() {

    const [episodes, setEpisodes] = useState([])

    useEffect(()=>{
        axios.get('https://rickandmortyapi.com/api/episode/')
             .then((response)=>{
                 console.log(response)
                 setEpisodes(response.data.results)
             })
    },[])
    return (
        <div>
            {episodes.map((episode, index) => (
            <Episode episode={episode} key={index}/>
            ))}
        </div>
    )
}
