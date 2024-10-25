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



function App() {
  return (
    <Routes>
      <Route path="/" element={<FuelStationForm />} />
      <Route path="/dashboard" element={<Dashboard />} />
      
      <Route path="/VO/login" element={<OwnerLogin />} />
      <Route path="/VO/profile" element={<OwnerProfile />} />
      <Route path="/VO/registration" element={<OwnerRegistration />} />

      <Route path="/admin/form" element={<AdminForm />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/admin/table" element={<AdminTable />} />

      <Route path="/users/form" element={<UserForm />} />
      <Route path="/users" element={<Users />} />
      <Route path="/users/table" element={<UsersTable />} />

      {/* Adjust route if you want to use FuelStationForm */}
    </Routes>
  );
}

export default App;
