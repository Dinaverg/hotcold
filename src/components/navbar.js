import React from 'react'

import './navbar.css'

export default function NavBar(props) {
  return (
    <div id='nav'>
      <h3>
        <span onClick={props.onClick}>
          New Game
        </span>
      </h3>
    </div>
  )
}