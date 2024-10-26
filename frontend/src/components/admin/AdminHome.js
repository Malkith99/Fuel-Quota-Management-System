import { useNavigate } from "react-router-dom";
import React from "react";
import "./AdminHome.css";

function AdminHome() {
    const navigate = useNavigate();
  return (
    <div>
    <div>
      <header className="App-header">
        <h1>Welcome to Fuel Quoata Management System</h1>
        <h2>Admin Portal</h2>
        <div className="buttons_2">

          <button className='userButton' onClick={()=> navigate('/users')}>Users</button>
          <button className='userButton' onClick={()=> navigate('/admin')}>Owners</button>
        </div>
      </header>
    </div>
    </div>
  )
}

export  default AdminHome
