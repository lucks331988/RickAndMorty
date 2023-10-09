import React from "react";
import styles from './Error.module.css';
import imagen from '../../img/img2.png'

function Error() {
  return (
    <div className={styles.errorStyles}>
      <h1>Error 404</h1>
      <img src={imagen} alt="" />
      <p>La página que estás buscando no existe.</p>
    </div>
  );
}

export default Error;
