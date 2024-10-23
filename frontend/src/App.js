import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProfilePage from './Pages/ProfilePage/ProfilePage';
import RegistrationPage from './Pages/RegistrationPage/ResgistrationPage';

function App() {
  return (
        <Router>
          <Routes>
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/register" element={<RegistrationPage />} />
          </Routes>
        </Router>
  );
}

export default App;
