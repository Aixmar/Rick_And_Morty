import styles from './Card.module.css';

export default function Card(props) {
   return (
   <div className = {styles.container}>
    <div className= {styles.card}>
          <button id={styles.btn} onClick={props.onClose}>X</button>
         <h2 id={styles.h2}>{props.name}</h2>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <img  src={props.image} alt="img" /> 
    </div>
   </div> 
   );
}
 
