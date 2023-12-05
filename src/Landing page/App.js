import './App.css';
import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>The Best Waifu finder Ever!</h1>
        <Link to="/Finder">
          <button type="button" className ="btn btn-primary btn-lg">you won't regret</button>
        </Link>
      </header>

      <footer className='App-footer'>
      <Link to="/Finder">
          <button type="button" className ="btn btn-primary btn-lg">Finder</button>
        </Link>
        <Link to="/Rola">
          <button type="button" className ="btn btn-primary btn-lg">API</button>
        </Link>
        <Link to= "/Login">
        <button type="button" className ="btn btn-primary btn-lg">Login</button>
        </Link>
      </footer>


    </div>
    
  );
}



export default App;
