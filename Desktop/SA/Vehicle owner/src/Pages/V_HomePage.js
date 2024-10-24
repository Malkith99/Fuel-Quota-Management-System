import React from 'react';
import { useNavigate } from 'react-router-dom';

import './V_HomePage.css';



const V_HomePage = () => {
  const navigate = useNavigate();

  // const navigateToSignup = () => {
  //   navigate('/vehicle-owner-signup');
  // };

  const navigateToLogin = () => {
    navigate('/vehicle-owner-login');
  };


  return (
    <div className="homeContainerV">
      <nav className="navbar">
        <a href="#" className="activeNavLink">Home</a>
        <a href="/vehicle-owner-dashboard" className="navbarLink">Dashboard</a>
        <a href="" className="navbarLink">Analytics</a>
        {/* <button className="signUpButton" onClick={navigateToSignup}>SIGN UP</button> */}
        <button className="logInButton" onClick={navigateToLogin}>LOGIN</button>
      
      </nav>

      <div className="contentContainerV">
        <div className="contentWrapperV">
          <section className="featureLeft">
            <div className="featureItem">
              {/* <img src={homeIcon} alt="Home icon" className="featureIcon" />
              <p className="featureText">Home</p> */}
            </div>
            
          </section>

          <header className="mainHeaderV">
            <h1 className="title">MMITA DriveHub</h1>
            <p className="subtitle"></p>
            
          </header>

          <section className="featureRight">
            <div className="featureItem">
              {/* <img src={dashboardIcon} alt="Dashboard icon" className="featureIcon" /> */}
              {/* <p className="featureText">Dashboard</p> */}
            </div>
            
          </section>
        </div>
      </div>
    </div>
  );
};

export default V_HomePage;
