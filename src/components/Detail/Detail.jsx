import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import styles from './Detail.module.css';
import { Link } from "react-router-dom";

export default function Detail (props) {

const {detailId} = useParams();
const [character, setCharacter] = useState({});

useEffect(() => {
  fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
  .then((response) => response.json())
  .then((char) => {
    if (char.name) {
      setCharacter(char);
    } else {
      window.alert("No hay personajes con ese ID");
    }
  })
  .catch((err) => {
    window.alert("No hay personajes con ese ID");
  });
  return setCharacter({});
}, [detailId]);

console.log(character);


    return (
        <div className={styles.container}>

           <Link to="/home">
            <button>GO BACK!</button>
           </Link>

          <img src={character.image} alt=""/>
           <h2>{character.name}</h2> 
           <h3>Origin: {character.origin?.name}</h3>    
           <h3>Gender: {character.gender}</h3>    
           <h3>Species: {character.species}</h3>    
        </div>
    )
}


// para obtener el id usamos useParams. En useParams me voy a guardar el id que entre por input.

// en el useState pongo un objeto vacío porque la idea es guardarme todos los objetos ahi. 

//le pone el ternario para origen porque no todos tienen, si tiene origen, dame el nombre.
