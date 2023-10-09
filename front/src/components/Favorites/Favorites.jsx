import React, { useState } from 'react';
import Card from '../Card/Card';
import { connect,useDispatch } from 'react-redux';
import { filterCards, orderCards } from '../../Redux/actions/actions';


function Favorites({ myFavorites }) {
  
  const dispatch = useDispatch();
  const [aux, setAux] = useState(false)

  const handlerOrder = (e)=>{
    dispatch(orderCards(e.target.value));
    setAux(true);

  };
  const handlerFilter = (e)=>{
    dispatch(filterCards(e.target.value));
    
  };
  return (
    <div>
      <select onChange={handlerOrder} >
        <option value="A">Ascendente</option>
        <option value="B">Descendente</option>
      </select>
      <select onChange={handlerFilter}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">unknown</option>
        <option value="allCharacters">All Characters</option>
      </select>
      {myFavorites?.map((fav) => (
        <Card
          key={fav.id}
          id={fav.id}
          name={fav.name}
          status={fav.status}
          species={fav.species}
          gender={fav.gender}
          image={fav.image}
          onClose={fav.onClose}
        />
      ))}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps)(Favorites);
