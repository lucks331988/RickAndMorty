import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 
import styles from './Card.module.css';
import { addFav, removeFav } from '../../Redux/actions/actions';
import { connect } from "react-redux";

function Card(props) {
   const { id, name, status, species, gender, image, onClose, addFav, removeFav, myFavorites } = props;
   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false);
         removeFav(id);
      } else {
         setIsFav(true);
         addFav({ id, name, status, species, gender, image, onClose });
      }
   };

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className={styles.container}>
         <div className={styles.buttonContainer}>
            <button onClick={handleFavorite} className={styles.favoriteButton}>
               {isFav ? '❤️' : '🤍'}
            </button>
            <div className={styles.botonCerrar}>
               <button onClick={() => props.onClose(id)} className={styles.closeButton}>
                  X
               </button>
            </div>
         </div>
         <div>
            <img className={styles.imagen} src={image} alt='' />
         </div>
         <div className={styles.titulosContainer}>
            <Link to={`/detail/${id}`} style={{ textDecoration: 'none' }} >
               <h2>{name}</h2>
            </Link>
            <h3><span className={styles.titulos}>STATUS:</span>{status}</h3>
            <h3><span className={styles.titulos}>SPECIES:</span>{species}</h3>
            <h3><span className={styles.titulos}>GENDER:</span>{gender}</h3>
         </div>
      </div>
   );
}

const mapStateToProps = (state) => {
   return {  
      myFavorites: state.myFavorites
   };
};

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => { dispatch(addFav(character)); },
      removeFav: (id) => { dispatch(removeFav(id)); }
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
