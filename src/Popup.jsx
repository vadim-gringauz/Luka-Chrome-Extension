import React from 'react'
import { render } from 'react-dom'
import './Popup.css'

export default function Popup () {
  return (
    <div className='Popup'>
      <h1>Expiriment extension v5</h1>
      <h2>fdsgdfgf</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
        accusamus culpa quia adipisci facilis! Eligendi neque, commodi et animi
        laboriosam quibusdam quisquam dolores? Quis inventore itaque beatae
        laboriosam tempore rerum.
      </p>
    </div>
  )
}

render(<Popup />, document.getElementById('react-target'))
