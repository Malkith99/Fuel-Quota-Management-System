import { useNavigate } from 'react-router-dom';
import './App.css';

function App() {

  const navigate = useNavigate();

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Fuel Quoata Management System</h1>
        <h2>Admin Portal</h2>
          <button className='userButton' onClick={()=> navigate('/users')}>Users</button>
          <button className='userButton' onClick={()=> navigate('/owners')}>Owners</button>
      </header>
    </div>
  );
}

export default App;
