import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './Pages/LoginPage.js';
import SignupPage from './Pages/SignupPage.js';
import DashboardPage from './Pages/DashboardPage.js';
//import AnalyticsPage from './pages/AnalyticsPage';
import HomePage from './Pages/HomePage.js';
//import NotificationPage from './pages/NotificationPage';

import './App.css';

const App = () => {
  // Static sample data (replace with real data if needed)
  const data = [
    { timestamp: Date.now(), current: 10, voltage: 230, frequency: 50, power: 2300 },
    { timestamp: Date.now() + 1000, current: 11, voltage: 231, frequency: 50.2, power: 2341 },
    // Add more sample data as needed
  ];

  const prepareChartData = (key) => ({
    labels: data.map(d => new Date(d.timestamp).toLocaleTimeString()),
    datasets: [
      {
        label: key,
        data: data.map(d => d[key]),
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  });

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          
          {/* <Route path="/notifications" element={<NotificationPage />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
