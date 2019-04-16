import React from 'react'

import './numberinput.css'

export default class NumberInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  onSubmit(event) {
    event.preventDefault()
    let value = this.input.value
    this.props.onSubmit(value)
    this.input.value = '';
    this.input.focus();
  }

  render() {
    return (
      <div id='num'>
        <form onSubmit={e => this.onSubmit(e)}>
          <input id='inp' type='number' 
          min={this.props.min} 
          max={this.props.max}
          ref={input => (this.input = input)}
          placeholder='Guess!'></input>
          <button type="submit">Submit</button>
        </form> 
      </div>
    )
  }
}