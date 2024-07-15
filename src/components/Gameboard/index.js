import React, {useState, useEffect} from 'react'
import './index.css'

import Tile from '../Tile'

const images = [
  'https://tse4.mm.bing.net/th?id=OIP.LFZ4_V1PmJpGXvjzKO3z2wHaFj&pid=Api&P=0&h=180',
  'https://tse2.mm.bing.net/th?id=OIP.CeZDzdExIBJa4bAnUhZJrAHaEo&pid=Api&P=0&h=180',
  'https://wallup.net/wp-content/uploads/2019/09/363515-toucan-parrot-bird-tropical-66.jpg',
  'https://tse4.mm.bing.net/th?id=OIP.unF5GorjJ2yB8zFK7O_qEgHaEK&pid=Api&P=0&h=180',
  'https://tse1.mm.bing.net/th?id=OIP.8uB_ZbXHR_phqv9usg_oXwHaFj&pid=Api&P=0&h=180',
  'https://tse1.mm.bing.net/th?id=OIP.8uB_ZbXHR_phqv9usg_oXwHaFj&pid=Api&P=0&h=180',
  'https://tse4.mm.bing.net/th?id=OIP.unF5GorjJ2yB8zFK7O_qEgHaEK&pid=Api&P=0&h=180',
  'https://wallup.net/wp-content/uploads/2019/09/363515-toucan-parrot-bird-tropical-66.jpg',
  'https://tse2.mm.bing.net/th?id=OIP.CeZDzdExIBJa4bAnUhZJrAHaEo&pid=Api&P=0&h=180',
  'https://tse4.mm.bing.net/th?id=OIP.LFZ4_V1PmJpGXvjzKO3z2wHaFj&pid=Api&P=0&h=180',
  'https://tse1.mm.bing.net/th?id=OIP.8uB_ZbXHR_phqv9usg_oXwHaFj&pid=Api&P=0&h=180',
  'https://tse4.mm.bing.net/th?id=OIP.unF5GorjJ2yB8zFK7O_qEgHaEK&pid=Api&P=0&h=180',
  'https://wallup.net/wp-content/uploads/2019/09/363515-toucan-parrot-bird-tropical-66.jpg',
  'https://tse2.mm.bing.net/th?id=OIP.CeZDzdExIBJa4bAnUhZJrAHaEo&pid=Api&P=0&h=180',
  'https://tse4.mm.bing.net/th?id=OIP.LFZ4_V1PmJpGXvjzKO3z2wHaFj&pid=Api&P=0&h=180',
  'https://tse1.mm.bing.net/th?id=OIP.8uB_ZbXHR_phqv9usg_oXwHaFj&pid=Api&P=0&h=180',
  'https://tse4.mm.bing.net/th?id=OIP.unF5GorjJ2yB8zFK7O_qEgHaEK&pid=Api&P=0&h=180',
  'https://wallup.net/wp-content/uploads/2019/09/363515-toucan-parrot-bird-tropical-66.jpg',
  'https://tse2.mm.bing.net/th?id=OIP.CeZDzdExIBJa4bAnUhZJrAHaEo&pid=Api&P=0&h=180',
  'https://tse4.mm.bing.net/th?id=OIP.LFZ4_V1PmJpGXvjzKO3z2wHaFj&pid=Api&P=0&h=180',
  ]
  const generateTiles = () => {
    const tiles = [];
    let id = 1;
  
    images.forEach((image) => {
      tiles.push({ id: id++, image, isFlipped: false });
      tiles.push({ id: id++, image, isFlipped: false });
    });
  
    // Randomize tile positions
    return tiles.sort(() => Math.random() - 0.5);
  };
  


const initialTiles = generateTiles();

const GameBoard = ({ onGameEnd }) => {
  const [tiles, setTiles] = useState(initialTiles);
  const [flippedTiles, setFlippedTiles] = useState([]);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(0);
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => setTime((prevTime) => prevTime + 1), 1000);
    setTimer(interval);
    return () => clearInterval(interval);
  }, []);

  const handleTileClick = (id) => {
    const newTiles = tiles.map((tile) => {
      if (tile.id === id) {
        tile.isFlipped = !tile.isFlipped;
      }
      return tile;
    });

    setTiles(newTiles);
    const flipped = newTiles.filter(tile => tile.isFlipped && !flippedTiles.includes(tile));
    
    if (flipped.length === 2) {
      if (flipped[0].image === flipped[1].image) {
        setScore((prevScore) => prevScore + 1);
        setFlippedTiles((prevFlippedTiles) => [...prevFlippedTiles, ...flipped]);
      } else {
        setScore((prevScore) => prevScore - 1);
        setTimeout(() => {
          setTiles((prevTiles) =>
            prevTiles.map((tile) => {
              if (tile.id === flipped[0].id || tile.id === flipped[1].id) {
                tile.isFlipped = false;
              }
              return tile;
            })
          );
        }, 1000);
      }
    }

    if (flippedTiles.length === initialTiles.length - 2) {
      clearInterval(timer);
      onGameEnd(score, time);
    }
  };

  return (
    <div className='game-bg-container'>
      <div className='score-time-holder'>
        <p className="text">Score: {score}</p>
        <p className="text">Time: {time} seconds</p>
      </div>  
      <div className="game-board">
        {tiles.map((tile) => (
          <Tile key={tile.id} tile={tile} onClick={handleTileClick} />
        ))}
      </div>
    </div>
  );
};

export default GameBoard
