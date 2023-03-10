import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./Nav.module.css";
import { Link } from "react-router-dom";


export default function Nav(props) {
 

    return ( 
         <div className={styles.container}>
            <Link to="/about">About</Link>
            <SearchBar onSearch={props.onSearch}/>
            <Link to="/home">Home</Link>
        </div>
    );
}