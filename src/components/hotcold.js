import React from 'react';
import NavBar from './navbar'
import Response from './response'
import NumberInput from './numberinput'

import './hotcold.css'

export default class Hotcold extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: Math.floor(Math.random() * 100),
      guess: null,
      res: null,
      pastGuesses: [null]
    }
  }

  reset() {
    this.setState({
      answer: Math.floor(Math.random() * 100),
      guess: null,
      res: null,
      pastGuesses: [null]
    })
  }

  newGuess(value) {
    this.setState({
      guess: value
    })

    const dif = (value - this.state.answer);
    console.log(dif)
    let x
    if (Math.abs(dif) >= 50) {
      x = 'Very Cold';
    } else if (Math.abs(dif) >= 25) {
      x = 'Cold';
    } else if (Math.abs(dif) >= 10) {
      x = 'Warm';
    } else if (dif >= 1) {
      x = 'A little lower...';
    } else if (dif <= -1) {
      x = 'A little higher...'
    } else {
      x = 'Correct!';
    }
    this.setState({
      res: x,
      pastGuesses: [...this.state.pastGuesses, this.state.guess]
    })

  }

  render() {
    return (
      <div>
        <NavBar onClick={() => this.reset()}/>
        <Response 
        value={this.state.guess} 
        res={this.state.res} 
        history={this.state.pastGuesses.slice(2)}/>
        <NumberInput  
        min={0} max={100} 
        onSubmit={value => this.newGuess(value)}/>
      </div>
    )
  }

}