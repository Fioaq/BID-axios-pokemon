import React, { useState } from 'react'
import styles from './FetchPokemon.module.css'

const FetchPokemon = () => {
    const [pokemon, setPokemon]= useState([]);

    const fetchPkmn = () => {
        fetch("https://pokeapi.co/api/v2/pokemon/")
        .then(response => {
            return response.json();
        }).then(response => {
            setPokemon(response.results.map(pokemon => pokemon.name));
        }).catch(err => {
            console.log(err);
        })
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