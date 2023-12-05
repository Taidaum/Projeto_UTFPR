import React, { useEffect, useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function Rola() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState(null);

  const inputRef = useRef(null);

  // Função para buscar dados da API com uma substring
  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`https://api.waifu.pics/sfw/${searchTerm}`);
      console.log(searchTerm);
      if (!response.ok) {
        throw new Error('Falha ao buscar dados da API');
      }
      const jsonData = await response.json();
      setData(jsonData);
      setError(null);
    } catch (error) {
      console.error(error);
      setError('Erro ao buscar dados. Tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  // Manipulador de eventos para o botão de busca
  const handleSearch = () => {
    // Validações
    if (searchTerm.trim() === '') {
      setError('O campo de busca não pode estar vazio.');
      inputRef.current.focus();
    } else {
      fetchData();
    }
  };

  useEffect(() => {
    // Foca no campo de entrada assim que o componente for montado
    inputRef.current.focus();
  }, []);

  return (
    <div className='container'>
      <h1>Choose your Waifu</h1>
      <h3>If you want to try a new one, refresh the page</h3>

      <Form.Control
        type="text"
        placeholder="Enter search term"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          setError(null);
        }}
        ref={inputRef}
      />

      <Button variant="primary" onClick={handleSearch}>
        Search
      </Button>

      {error && <p className="text-danger">{error}</p>}

      {isLoading ? (
        <p>Loading your Waifu...</p>
      ) : (
        <div className='img'>
          <img src={data.url} alt="50%" height="50%" />
        </div>
      )}
        <footer className='App-footer'>
      <Link to="/Finder">
          <button type="button" className ="btn btn-primary btn-lg">Finder</button>
        </Link>
        <Link to="/">
          <button type="button" className ="btn btn-primary btn-lg">Início</button>
        </Link>
      </footer>
    </div>
  );
}

export default Rola;