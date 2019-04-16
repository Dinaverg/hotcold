import React from 'react'

import './response.css'

export default function Response(props) {
  let value = props.value
  let res = props.res
  let hist = props.history
  let h = hist.map((guess, index) => <li key={index}>{guess}</li>)

  return (
    <div id='res'>
      <h2>{res}</h2>
      <h3 className={res === 'Correct!' ? 'green' : null}>
        {value}
      </h3>
      <ul>{h}</ul>
    </div>
  )
}