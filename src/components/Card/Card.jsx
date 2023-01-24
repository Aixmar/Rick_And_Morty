import styles from './Card.module.css';
import { Link } from 'react-router-dom';

export default function Card({name,species,gender,image,onClose,id}) {
   return (
     <div className={styles.container}>
              <div className={styles.buttoncontainer}>
                  <button onClick={onClose}> X </button>
              </div>
            <Link to={`/detail/${id}`}>
              <h2>{name}</h2>
              <img className={styles.image} src={image} alt="img" /> 
              <div className={styles.data}>
                <h2>{species}</h2>
                <h2>{gender}</h2>
              </div>
            </Link>
        </div>
   );
}
 
