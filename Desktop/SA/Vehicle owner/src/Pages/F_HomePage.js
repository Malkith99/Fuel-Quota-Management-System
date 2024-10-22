import React from 'react';
import { useNavigate } from 'react-router-dom';

import './F_HomePage.css';
import mainImage from '../Images/HomeImage2.jpg';
import homeIcon from '../Images/HomeImage.jpg';


const F_HomePage = () => {
const navigate = useNavigate();

const navigateToSignup = () => {
    navigate('/fuel-station-signup');
};

const navigateToLogin = () => {
    navigate('/fuel-station-login');
};

return (
    <div className="homeContainerF">
    <nav className="navbar">
        <a href="#" className="activeNavLink">Home</a>
        <a href="/fuel-station-dashboard" className="navbarLink">Dashboard</a>
        <a href="#" className="navbarLink">Analytics</a>
        <button className="signUpButton" onClick={navigateToSignup}>SIGN UP</button>
        <button className="logInButton" onClick={navigateToLogin}>LOGIN</button>
    </nav>

    <div className="contentContainerF">
        <div className="contentWrapperF">
        <section className="featureLeft">
            <div className="featureItem">
            {/* <img src={homeIcon} alt="Home icon" className="featureIcon" />
              <p className="featureText">Home</p> */}
            </div>
            
        </section>

        <header className="mainHeaderF">
            <h1 className="title">MMITA Fuel Station</h1>
            <p className="subtitle"></p>
            
        </header>

        <section className="featureRight">
            <div className="featureItemF">
              {/* <img src={dashboardIcon} alt="Dashboard icon" className="featureIcon" /> */}
              {/* <p className="featureText">Dashboard</p> */}
            </div>
            
        </section>
        </div>
    </div>
    </div>
);
};

export default F_HomePage;
