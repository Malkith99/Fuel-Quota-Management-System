import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProfilePage from './Pages/ProfilePage/ProfilePage';
import RegistrationPage from './Pages/RegistrationPage/ResgistrationPage';
import LoginPage from './Pages/LoginPage/LoginPage';

function App() {
  return (
        <Router>
          <Routes>
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/register" element={<RegistrationPage />} />
              <Route path="/login" element={<LoginPage />} />
          </Routes>
        </Router>
  );
}

export default App;
