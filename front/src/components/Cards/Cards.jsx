import Card from '../Card/Card';
import styles from './Cards.module.css';

export default function Cards(props) {

   const {characters} = props
   return <div className={styles.containerCards}>
      {characters.map((card)=>(
      <div key={card.id}>
         <Card 
         id={card.id}
         name={card.name}
         status={card.status}
         species={card.species}
         gender={card.gender}
         image={card.image}
         onClose={() => props.onClose(card.id)} 
         />
      </div>))}
   </div>;
}
