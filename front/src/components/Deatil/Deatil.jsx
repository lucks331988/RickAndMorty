import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styles from './Deatil.module.css';

function Detail() {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/detail/${id}`)
      .then(({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((error) => {
        console.error("Error:", error.message);
        window.alert("Ocurrió un error al buscar el personaje.");
      });

    return () => setCharacter({});
  }, [id]);

  return (
    <div className={styles.container}>
      <div className={styles.containerH2}>
        {character.name && <h2>{character.name}</h2>}
      </div>
      <div className={styles.containerImg}>
        {character.image && <img src={character.image} alt={character.name} />}
      </div>
      <div className={styles.containerParrafos}>
        {character.status && <p>Status: {character.status}</p>}
        {character.species && <p>Species: {character.species}</p>}
        {character.gender && <p>Gender: {character.gender}</p>}
        {character.origin && (
          <p>Origin: {character.origin.name}</p>
        )}
      </div>
    </div>
  );
}

export default Detail;

