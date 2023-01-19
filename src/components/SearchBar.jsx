import styles from "./SearchBar.module.css";

export default function SearchBar(props) {
   return (
      <div>
         <input id={styles.cajita} type='search' />
      <button id={styles.btn} onClick={props.onSearch}>Buscar</button> 
      </div>
   );
}

