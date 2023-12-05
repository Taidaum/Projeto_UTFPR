import React from 'react';
import Pai from '../Componentes/Pai';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './Finder.css'
function Finder() {
  return (
    <div >
      <Pai />
      <Link to="/rola">
        <button type="button" className="btn btn-primary btn-lg">Click At Me</button>
      </Link>

      <footer className='footer'>
        <Link to="/">
          <button type="button" className="btn btn-primary btn-lg">Início</button>
        </Link>
        <Link to="/Rola">
          <button type="button" className="btn btn-primary btn-lg">API</button>
        </Link>
      </footer>

    </div>
  )
}

export default Finder;