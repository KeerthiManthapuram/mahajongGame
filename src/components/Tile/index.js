
import React from 'react'
import './index.css'

const Tile = ({ tile, onClick }) => {
  return (
    <div  className='tile-holder' onClick={() => onClick(tile.id)}>
      {tile.isFlipped ? <img className='image' src={tile.image} alt="tile" /> : <div className="tile-back"></div>}
    </div>
  )
}

export default Tile
