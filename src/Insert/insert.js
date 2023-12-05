import React, { useEffect, useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';



function insert(){
    return(
        <div>
            <header>
                Tela de Inserção de usuários 
            </header>
            <body>

            </body>
            <footer>
                <Link to="/">
                    <button type="button" className ="btn btn-primary btn-lg">Início</button>
                </Link>
                <Link to="/">
                    <button type="button" className ="btn btn-primary btn-lg">Select</button>
                </Link>
            </footer>
        </div>
    )
}


function insertdb(){

}

export default insert;