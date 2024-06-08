import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // Vérification de la concordance login/pwd via l’API
    const login = async (e) => {
        e.preventDefault();
        try {
            // on vérifie que l’utilisateur existe et on récupère son JWT généré par le serveur
            const { data } = await axios.post('/api/auth/login', { username, password });
            // On stocke le token dans le localStorage du client
            localStorage.setItem('authToken', data.token);
            navigate('/profile');
        } catch (error) {
            console.error(error);
            alert('Invalid username or password');
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={login}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}
export default Login;
