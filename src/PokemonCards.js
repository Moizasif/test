import React, { useState, useEffect } from 'react';
import {Grid, Card, CardMedia, CardContent, CircularProgress, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';



const useStyles = makeStyles({
    pokedexContainer: {
        paddingTop: "30px",
        paddingLeft: "250px",
        paddingRight: "250px",
      },
      card:{
       backgroundColor: '#7dbce3',
      },
    cardMedia: {
        margin: 'auto'
    },
    cardContent: {
        textAlign: 'center'
    }
})


const PokemonCards = (pokemonId) => {
    const classes = useStyles();

    const [pokemonData,setPokemonData] = useState({});

    useEffect(() => {
       axios.get(`https://pokeapi.co/api/v2/pokemon?offset=100&limit=100`)
       .then(function (response) {
            const {data} = response;
            const { results } = data; 
            const newPokemonData = {};
            results.forEach((pokemon, index) => {
                newPokemonData[index + 1] = {
                    id: index + 1,
                    name: pokemon.name,
                    sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png` 
                };
            });
            setPokemonData(newPokemonData)
       })
    }, [])
 


    const getPokemonCard = (pokemonId) => {
        console.log(pokemonData[`${pokemonId}`])
        const { id, name, sprite } = pokemonData[pokemonId];
        return (
    
    <Grid item xs={12} sm={3} key={pokemonId}>
      <Card className={classes.card}>
          <CardMedia
          className={classes.cardMedia} 
          image ={sprite} 
          style={{height: "150px", width: "150px"}}/>
          <CardContent className={classes.cardContent}>
            <Typography>{`${id}.  ${name}`}</Typography>
          </CardContent>
      </Card>
    </Grid>
        )
        
    }


    return (
       
        <>
           {pokemonData ? (
                 <Grid container spacing={4} className={classes.pokedexContainer} >
                 {Object.keys(pokemonData).map((pokemonId => 
                    getPokemonCard(pokemonId)
                    ))}[]
                </Grid>
           ):(
               <CircularProgress />
           )}
         
        </>
    )
}

export default PokemonCards
