import React from 'react';
import PokemonCards from './PokemonCards';


function App() {
  return (
    <div className="App">
     <h1 style={{color:'white', textAlign:'center', fontFamily:'sans-serif'}}>My Pokemons</h1>
     <PokemonCards />
    </div>
  );
}

export default App;
