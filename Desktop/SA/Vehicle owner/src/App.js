import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import V_LoginPage from './Pages/V_LoginPage.js';
import V_SignupPage from './Pages/V_SignupPage.js';
import V_DashboardPage from './Pages/V_DashboardPage.js';
import V_HomePage from './Pages/V_HomePage.js';

import F_HomePage from './Pages/F_HomePage.js'; // Fuel Station Home Page
import F_SignupPage from './Pages/F_SignupPage.js';
import F_LoginPage from './Pages/F_LoginPage.js';
import F_DashboardPage from './Pages/F_DashboardPage.js';

import MainPage from './Pages/MainPage.js';
import './App.css';



// const App = () => {
//   // Static sample data (replace with real data if needed)
//   const data = [
//     { timestamp: Date.now(), current: 10, voltage: 230, frequency: 50, power: 2300 },
//     { timestamp: Date.now() + 1000, current: 11, voltage: 231, frequency: 50.2, power: 2341 },
//     // Add more sample data as needed
//   ];

//   const prepareChartData = (key) => ({
//     labels: data.map(d => new Date(d.timestamp).toLocaleTimeString()),
//     datasets: [
//       {
//         label: key,
//         data: data.map(d => d[key]),
//         fill: false,
//         borderColor: 'rgba(75,192,192,1)',
//       },
//     ],
//   });

  const App = () => {
    return (
      <Router>
        <Routes>
          {/* Main Page */}
          <Route path="/" element={<MainPage />} />
  
          {/* Vehicle Owner Pages */}
          <Route path="/vehicle-owner" element={<V_HomePage />} />
          <Route path="/vehicle-owner-signup" element={<V_SignupPage />} />
          <Route path="/vehicle-owner-login" element={<V_LoginPage />} />
          <Route path="/vehicle-owner-dashboard" element={<V_DashboardPage />} />
  
          {/* Fuel Station Owner Pages */}
          <Route path="/fuel-station" element={<F_HomePage />} />
          <Route path="/fuel-station-signup" element={<F_SignupPage />} />
          <Route path="/fuel-station-login" element={<F_LoginPage />} />
          <Route path="/fuel-station-dashboard" element={<F_DashboardPage />} />
        </Routes>
      </Router>
    );

  // return (
  //   <Router>
  //     <div>
  //       <Routes>
  //         <Route path="/" element={<V-HomePage />} />
  //         <Route path="/signup" element={<V-SignupPage />} />
  //         <Route path="/login" element={<V-LoginPage />} />
  //         <Route path="/dashboard" element={<V-DashboardPage />} />
          
  //         {/* <Route path="/notifications" element={<NotificationPage />} /> */}
  //       </Routes>
  //     </div>
  //   </Router>
  // );
}

export default App;
