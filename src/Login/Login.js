import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import { AuthUser } from '../services/auth';
import { setJwtToken } from '../Utils/token';


function Login() {
    const navigate = useNavigate();
    const [login, setlogin] = useState({ email: '', password: '' })

    const handleLogin = async () => {
        try {
            const user = await AuthUser(login);
            setJwtToken(user.token);
            navigate("/select");
        } catch (error) {

        }
    }

    return (
        <div className="login">
            <header className='Tela Login'>
                <h1>Login</h1>


            </header>
            <body className='corpo'>
                <form className='form' action='#'>
                    <fieldset>
                        <legend>Your credentials</legend>
                        <div className='email'>
                            <label className='email2'>Email: <em class="required"> *</em></label>
                            <input
                                type='text'
                                value={login.email}
                                onChange={(e) => {
                                    const temp = e.target.value;
                                    setlogin({ ...login, email: temp })
                                }} />
                        </div>

                        <div className='senha'>
                            <label className='senha2'>Senha: <em class="required"> *</em></label>
                            <input
                                type='password'
                                value={login.password}
                                onChange={(e) => {
                                    const temp = e.target.value;
                                    setlogin({ ...login, password: temp })
                                }} />
                        </div>
                        <button type="button" className="btn btn-primary btn-lg" onClick={handleLogin}>Submit</button>
                    </fieldset>
                </form>
            </body>
            <footer>
                <Link to="/Finder">
                    <button type="button" className="btn btn-primary btn-lg">Finder</button>
                </Link>
                <Link to="/Rola">
                    <button type="button" className="btn btn-primary btn-lg">API</button>
                </Link>
            </footer>
        </div>
    )
}



export default Login;