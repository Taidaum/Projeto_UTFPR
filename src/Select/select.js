import React, { useEffect, useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';


function selection(){
    return(
        <div>
            <header>Tela de seleção</header>
            <body>
                <form>Search by e-mail</form>
                <input type='text' placeholder='Type the email'></input>
                <ListGroup>
                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                    <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
            </body>
            <footer>
                <Link to="/">
                    <button type="button" className ="btn btn-primary btn-lg">Início</button>
                </Link>
                <Link to="/">
                    <button type="button" className ="btn btn-primary btn-lg">Insert</button>
                </Link>
            </footer>
        </div>
    )

}

export default selection;