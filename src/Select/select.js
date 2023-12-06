import React, { useEffect, useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import { DeleteUser, FilterListUser, ListUser } from '../services/user';
import { setJwtToken } from '../Utils/token';


function Selection() {
    const [search, setSearch] = useState('');
    const [listUser, setListUser] = useState([]);

    const handleSearch = async () => {
        try {
            const user = await FilterListUser(search);
            setListUser(user);
        } catch (error) {

        }
    }

    const handleDelete = async (userId) => {
        try {
            await DeleteUser(userId);
            const data = await ListUser();

            setListUser(data);
        } catch (error) {

        }
    }

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await ListUser();
                setListUser(data)
            } catch (e) {
                console.log(e);
            } finally {
            }
        }
        fetchData();
    }, [])

    return (
        <div>
            <header>Tela de seleção</header>
            <body>
                <form>Search by e-mail</form>
                <div>
                    <input
                        type='text'
                        value={search}
                        placeholder='Type the email'
                        onChange={(e) => {
                            const temp = e.target.value;
                            setSearch(temp);
                        }}
                    />
                    <button onClick={handleSearch}>Search</button>
                </div>
                <ListGroup>
                    {listUser.map((a) => {
                        return (
                            <div>
                                <ListGroup.Item>{a.email}</ListGroup.Item>
                                <button onClick={async () => handleDelete(a.id)}>Delete</button>
                            </div>
                        )
                    })}
                </ListGroup>
            </body>
            <footer>
                <Link to="/">
                    <button type="button" className="btn btn-primary btn-lg">Início</button>
                </Link>
                <Link to="/">
                    <button type="button" className="btn btn-primary btn-lg">Insert</button>
                </Link>
            </footer>
        </div>
    )

}

export default Selection;