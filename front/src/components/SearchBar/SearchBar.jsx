import { useState } from 'react';
import styles from './SerchBar.module.css';

export default function SearchBar(props) {
   const [id, setId] =  useState('');

   const handleChange =(e)=>{
      setId(e.target.value);
   };
   const handleSearch = () => {
      props.onSearch(id);
      setId(''); 
    };

   return (
      <div className={styles.container}>
         <input 
         type='search'  
         className={styles.inputStyle}
         value={id}
         onChange={handleChange}
         />
            <button className={styles.button} onClick={handleSearch}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Agregar</button>
      </div>
   );
}
