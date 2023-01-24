import { useState } from 'react';
import styles from './SearchBar.module.css'

export default function SearchBar(props) {

   const [character,setCharacter] = useState("");
   //es en singular porque es el que va a buscar el usuario
   //voy a guardar lo que el usuario me esté pasando por el input de abajo(es string)

   //hago la funcion para modificar el estado: (guardar el id)
   const handleChange = (event) => {
      const {value} = event.target; //hizo destructuring de event.target.value
      setCharacter(value)
   }

   return (
      <div className={styles.container}>
         <input type='search' name="search" id="" onChange={handleChange}/> 
         <button onClick={() => props.onSearch(character)}>Agregar</button> 
      </div>
   );
}

//el input es la barrita blanca para escribir.

/*
En el onClick pasa la función asi porque no se la quiere mandar ejecutada,
si se la manda directo la ejecución, cada vez que cargue la página va a dar el resultado, una sola vez
Pasa la receta, no la hamburguesa hecha. 
Como la puse, cada vez que se escriba un input y se haga click se va a ejecutar. 
*/

