import React, { Component } from 'react'

export default class Searchbar extends Component {

  // 1. Event handler on onChange on the input run a function
  // 2. Store 'searchText' in state
  // 3. Run a set/ update state function passed down as props


  render() {
    return (
      <div>
        <h4>Search a Pokémon name or number</h4>
        <input onChange={(e) => this.props.getPokemon(e.target.value)} />
      </div>
    )
  }
}
