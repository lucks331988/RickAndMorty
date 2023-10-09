import React, { useState, useEffect } from 'react';
import './App.css';
import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';
import Detail from './components/Deatil/Deatil';
import About from './components/About/About';
import Error from './components/Error/Error';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';

function App() {
  const [characters, setCharacters] = useState([]);
  const [shownCharacterIds, setShownCharacterIds] = useState(new Set());
  const [access, setAccess] = useState(false);
  const username = "villalba@gmail.com";
  const password = "lu123456";

  const navigate = useNavigate();

  function login(userData) {
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate("/home");
    }else{
      console.log('incorrecto');
    }
  }
  

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  function onSearch(id) {
    if (shownCharacterIds.has(id)) {
      window.alert('¡Este personaje ya se encuentra en pantalla!');
      return;
    }
  
    fetch(`http://localhost:3001/rickandmorty/onsearch/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('¡No hay personajes con este ID!');
        }
        return response.json();
      })
      .then((data) => {
        if (data.name) {
          setShownCharacterIds((prevIds) => new Set([...prevIds, id]));
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert('¡No hay personajes con este ID!');
        }
      })
      .catch((error) => {
        console.error('Error:', error.message);
        window.alert('Ocurrió un error al buscar el personaje.');
      });
  }
  

  const onClose = (id) => {
    const idNumber = parseInt(id, 10);
    const upDate = characters.filter((character) => character.id !== idNumber);
    setCharacters(upDate);
  }

  const location = useLocation();

  return (
    <div className='App'>
      {location.pathname !== "/" && <Nav onSearch={onSearch} /> }

      <Routes>
        <Route exact path="/" element={<Form login={login} />} />
        <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
