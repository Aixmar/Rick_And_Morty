import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import About from './components/About/About.jsx'
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form'

function App () {
 
const [characters, setCharacters] = useState([]);
//crea un array vacio que vamos a ir guardando nuestros personajes



function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
       .then((response) => response.json())
       .then((data) => {
          if (data.name) {
             setCharacters((oldChars) => [...oldChars, data]);
          } else {
             window.alert('No hay personajes con ese ID');
          }
       });
  };

 


//  const onSearch = () => {
//   setCharacters([
//     ...characters, 
//     example
//   ])
//  trae lo del array vacío que luego va a hacer de la API


const onClose = (id) => {
  setCharacters(characters.filter(character => character.id !== id ));
};
/*
Cómo hago para cerrar la carta? tengo que filtrar por id. Que busque los id, y cuando no sea
igual al que entró por input, que lo deje pasar. 
*/

//location es donde guardo una url
const location = useLocation()

//location.pathname !== "/" : si esto es V, andá a chequear lo que sigue
// lo que sigue es Nav, si no se cumple no sigue. 




  return (
    <div className='App' style={{ padding: '25px' }}>
      {location.pathname !== "/" && <Nav onSearch={onSearch}/> }
      

      <Routes>
        <Route path="/" element={<Form/>}/>
        <Route path="/home" element={<Cards characters={characters} onClose={onClose} />}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/detail/:detailId" element={<Detail/>}/>
      </Routes>
       
    </div>
    );
}

export default App

// Pongo Cards adento del element porque en el ReadMe me dice que Cards
//debe aparecer solo en la ruta home