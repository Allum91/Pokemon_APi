import React, { Component } from 'react';
import styles from './Card.module.scss';

export default class Card extends Component {

  // Add a click event to this component
  // WHen the card is clicked it should show all the data about the pokemon
  // this will simulate the look/ feel of an actual real life card

  render() {
    return (
      <div className={styles.Card}>
        <div className={styles.pokemonCard}>
          <h1>{this.props.pokemon.name}</h1>
          <img src={this.props.pokemon.sprites.front_shiny}/>
          <p>{this.props.pokemon.types.map(type => {return type.name})}</p>
        </div>
      </div>
    )
  }
}
