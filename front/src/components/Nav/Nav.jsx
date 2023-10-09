import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar'; // Asegúrate de que la ruta sea correcta
import styles from './Nav.module.css';

function Nav(props) {
  const addRandomCharacter = () => {
    const minId = 1;
    const maxId = 671;
    const randomId =
      Math.floor(Math.random() * (maxId - minId + 1)) + minId;
    props.onSearch(randomId);
  };

  return (
    <div className={styles.container}>
      <SearchBar onSearch={props.onSearch} />
      <div className={styles.buttonsContainer}>
        <button className={styles.button} onClick={addRandomCharacter}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Agregar Personaje Aleatorio
        </button>
        <Link to="/about">
          <button className={styles.button}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            About
          </button>
        </Link>
        <Link to="/home">
          <button className={styles.button}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Home
          </button>
        </Link>
        <Link to="/Favorites">
          <button className={styles.button}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Favoritos
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Nav;
