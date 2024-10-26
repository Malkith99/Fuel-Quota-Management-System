import "./App.css";
import FuelStationForm from "./components/fuelStation/FuelStationForm";
import LoginPage from "./components/fuelStation/LoginPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/fuelStation/Dashboard";
import OwnerLogin from "./components/vehicleOwner/Pages/LoginPage/LoginPage";
import OwnerProfile from "./components/vehicleOwner/Pages/ProfilePage/ProfilePage";
import OwnerRegistration from "./components/vehicleOwner/Pages/RegistrationPage/ResgistrationPage";
import AdminForm from "./components/admin/OwnerForm";
import Admin from "./components/admin/Owners";
import AdminTable from "./components/admin/OwnersTable";
import UserForm from "./components/users/UserForm";
import Users from "./components/users/Users";
import UsersTable from "./components/users/UsersTable";
import HomePage from "./components/homePage";
import Scanner from "./components/Scanner/Scanner";
import AdminHome from "./components/admin/AdminHome";




function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/fuelstation" element={<FuelStationForm />} />
      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="/VO/login" element={<OwnerLogin />} />
      <Route path="/VO/profile" element={<OwnerProfile />} />
      <Route path="/VO/registration" element={<OwnerRegistration />} />

      <Route path="/adminHome" element={<AdminHome/>} />
      <Route path="/users" element={<Users />} />
      <Route path="/admin" element={<Admin/>} />


      <Route path="/scanner" element={<Scanner/>} />

      {/* Adjust route if you want to use FuelStationForm */}
    </Routes>
  );
}

export default App;
