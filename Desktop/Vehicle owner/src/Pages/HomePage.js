import React from 'react';
import { useNavigate } from 'react-router-dom';

//import './HomePage.css';
import mainImage from '../Images/HomeImage.jpg';
import homeIcon from '../Images/house.png';


const HomePage = () => {
  const navigate = useNavigate();

  function navigateToLogin() {
    navigate('/signup');
  }

  return (
    <div className="homeContainer">
      <nav className="navbar">
        <a href="#" className="activeNavLink">Home</a>
        <a href="#" className="navbarLink">Dashboard</a>
        <a href="#" className="navbarLink">Analytics</a>
        <a href="#" className="navbarLink">Inverters</a>
      </nav>

      <div className="contentContainer">
        <div className="contentWrapper">
          <section className="featureLeft">
            <div className="featureItem">
              <img src={homeIcon} alt="Home icon" className="featureIcon" />
              <p className="featureText">Home</p>
            </div>
            
          </section>

          <header className="mainHeader">
            <h1 className="title">Solar Energy Monitoring System</h1>
            <p className="subtitle">Monitor and analyze your solar energy usage from anywhere.</p>
            <button className="signUpButton" onClick={navigateToLogin}>SIGN UP</button>
          </header>

          <section className="featureRight">
            <div className="featureItem">
              {/* <img src={dashboardIcon} alt="Dashboard icon" className="featureIcon" /> */}
              <p className="featureText">Dashboard</p>
            </div>
            
          </section>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
