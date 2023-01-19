import './App.css';
import Cards from './components/Cards.jsx';
import characters, { Rick } from './data.js';
import Nav from './components/Nav';
import { Route, Routes } from 'react-router-dom';

function App () {
  return (
    <div className='App' style={{ padding: '25px' }}>
      <Nav />
      <div>
        <Cards
      characters={characters}/>
      </div>
      </div>
  )
};

export default App
