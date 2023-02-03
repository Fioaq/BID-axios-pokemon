import React, { useState } from 'react'
import styles from './FetchPokemon.module.css'
import axios from 'axios';

const FetchPokemon = () => {
    const [pokemon, setPokemon]= useState([]);

    const fetchPkmn = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon/")
            .then(response => {setPokemon(response.data.results.map(pokemon => pokemon.name))})
            .catch(err => {console.log(err);})
        }
    return (
        <>
            <button className={styles.btn} onClick={fetchPkmn}>Fetch Pokemon</button>
            <ul>
                {pokemon.map((item, idx) => <li key={idx}>{item}</li>)}
            </ul>
        </>
    )
}

export default FetchPokemon