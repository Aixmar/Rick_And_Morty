import SearchBar from "./SearchBar";
import styles from "./Nav.module.css";
import About from "./About";
import App from "../App";
import { Link } from "react-router-dom";

export default function Nav(props) {
 const toAbout = () => {};


    return (
        <>
        <div className={styles.navdis}>
        <SearchBar />
        <Link to="/about" onClick={toAbout}>About</Link>
        <Link to="/home">Home</Link>
                </div>
       </>
    );
}