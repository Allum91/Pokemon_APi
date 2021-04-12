import React, { Component } from 'react'
import Searchbar from './components/Searchbar/Searchbar';
import Card from './components/Card/Card';

export default class App extends Component {

  getPokemon(searchText) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${searchText}`)
    .then(apiResponse => {
      return apiResponse.json()
    }).then(jsonResponse => {
      console.log(jsonResponse)
      this.setState({
        searchedPokemon: jsonResponse
      })
    })
    .catch(err => {
      console.log('Could not find pokemon with name ' + this.state.searchText)
    })
  }
  
  constructor() {
    super();
    this.state = {
      searchedPokemon: {}
    }
  }

  render() {
    return (
      <div>
        <Searchbar getPokemon={(e) => this.getPokemon(e)}/>
        <Card pokemon={this.state.searchedPokemon}/>
      </div>
    )
  }
}
