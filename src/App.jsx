import React from 'react'
import { render } from 'react-dom'
import { useState } from 'react'
// import Luka from './Luka'
import './App.css'
import './Luka.css'


function Luka () {
    const [newSrc, setNewSrc] = useState('https://pbs.twimg.com/media/Dtg7TLhW0AEWBvg.jpg')
  
    const handleClick = () => {
      console.log('switch')
      const imgs = document.getElementsByTagName('img')
      for (let i = 0; i < imgs.length; i++) {
        imgs[i].src = newSrc
      }
    }
  
    return (
      <div className='Luka'>
        <button className='btn' onClick={handleClick}>
          Luka-fy
        </button>
      </div>
    )
  }

export default function App() {
    console.log('App!!!')

  return (
    <div>
        <Luka />
    </div>
  )
}



const appRoot = document.createElement('div');
document.body.appendChild(appRoot);

render(<App />, appRoot);
