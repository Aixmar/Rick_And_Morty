import Card from '../Card/Card';

   
   //el arreglo que viene de data

   /*El componente Cards es como un contenedor donde voy a llamar muchas veces
    a mi componente Card. Hago eso con un .map de forma declarativa.
    Le aplico .map a mi componente characters.
    Acá hizo destructuring, pero sino haría props.character.map
    Por cada character yo quiero retornar 
  */

   
    
    export default function Cards({characters , onClose}) {
   return( 
    <div style={{
      display:'flex', justifyContent:'space-evenly', margin: '4px 4px 4px 4px'
  }}>  
      {
      characters.map(({id,name,species,gender,image}) => {
      return <Card
         id ={id}
         name={name}
         species={species}
         gender={gender}
         image={image}
         key={id}
         onClose={()=> onClose(id)}
         />
      })
   }
   </div>
   )
}


//recorre characters e  invoca la cantidad de personajes que tenga ese arreglo


// como queria ponerle una sola cosa de estilo a las cartas en si,
// que se pusieran una al lado de la otra, no vale la pena hacer otro archivo module.css,
// conviene ponerle el style directo en el div. OJO, es style, NO styles

//le pone detailId porque así nos lo pasó el ReadMe para poner en el Link de Card