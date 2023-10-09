import { useState } from 'react';
import styles from './Form.module.css';
import Validation from './Validation.js';
import { FaUser, FaLock } from 'react-icons/fa'; 

function Form(props) {
  const [userData, setUserData] = useState({
    username: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(''); // Define un mensaje de error inicial si lo deseas

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
    setErrors(
      Validation({
        ...userData,
        [name]: value,
      })
    );
  };

  const login = (e) => {
    e.preventDefault();
    const username = "villalba@gmail.com";
    const password = "lu123456";

    if (userData.username === username && userData.password === password) {
      props.login(userData);
    } else {
      setErrorMessage('Usuario o contraseña incorrectos');
      setShowError(true);
    }
  };
  const closeModal = () => {
    setShowError(false);
  };

  return (
    <div className={styles.login}>
      <img src="https://images8.alphacoders.com/625/625910.png" alt="" className={styles.login_bg} />
      <form onSubmit={login} className={styles.login_form}>
        <h1 className={styles.login_title}>Inicio</h1>
        <div className={styles.login_inputs}>
          <div className={styles.login_box}>
            <input
              type="text"
              name='username'
              value={userData.username} 
              onChange={handleInputChange}
              required
              className={styles.login_input}
            />
            <FaUser className={styles.icon} />  
            <p className={styles.error}>{errors.username && errors.username}</p>
          </div>
          <div className={styles.login_box}>
            <input
              type='password' 
              name='password'
              value={userData.password}
              onChange={handleInputChange}
              required
              className={styles.login_input}
            />
            <FaLock className={styles.icon} /> 
            <p className={styles.error}>{errors.password && errors.password}</p>
          </div>
        </div>
        <button type="submit" className={styles.login_button}>
          Iniciar
        </button>
      </form>
      {showError && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <p className={styles.errorMessage}>{errorMessage}</p>
            <button
              type="button"
              className={styles.acceptButton}
              onClick={closeModal}
            >
              Aceptar
            </button>
            </div>
        </div>
      )}
    </div>
  );
}

export default Form;
