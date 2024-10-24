import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MainPage.css'; 
import F_HomePage from './F_HomePage.js';
import V_HomePage from './V_HomePage.js';

const MainPage = () => {
  const navigate = useNavigate();

  const goToUserPage = () => {
    navigate('/vehicle-owner');
  };

  const goToAdminPage = () => {
    navigate('/fuel-station');
  };
  
  return (

    <div className='homeContainer'>
    <div style={styles.container}>
      <h1>Fuel Quota Management System</h1>
      <div style={styles.buttonContainer}>
        <button style={styles.button} onClick={goToUserPage}>
          User Login
        </button>
        <button style={styles.button} onClick={goToAdminPage}>
          Admin Login
        </button>

        <div class="descriptionBox">
  <h2>Fuel Quota Management System</h2>
  <p>
    The Fuel Quota Management System is designed to manage fuel distribution during crises efficiently. It allows vehicle owners to register their vehicles, track their available fuel quota, and receive notifications. Fuel station operators can scan vehicle QR codes to check and manage quotas. The system is integrated with a real-time database and ensures transparent, fair distribution of fuel resources across the country.
  </p>
</div>

      </div>
    </div>
    </div>
  );
};


const styles = {
  container: {
    textAlign: 'center',
    padding: '50px',
  },
  buttonContainer: {
    marginTop: '20px',
  },
  button: {
    margin: '10px',
    padding: '10px 20px',
    fontSize: '18px',
    cursor: 'pointer',
  },
};

export default MainPage;
