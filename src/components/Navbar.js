import React from 'react';
import { Link } from 'react-router-dom';
import Logout from './Logout';

const Navbar = ({ isAuthenticated, handleLogout }) => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Accueil</Link></li>
                {isAuthenticated ?
                    <>
                        <li><Link to="/profile">Profil</Link></li>
                        <li><Link to="/addtask">Ajouter une tâche</Link></li>
                        <Logout handleLogout={handleLogout} />
                    </> :
                    <>
                        <li><Link to="/register">Inscription</Link></li>
                        <li><Link to="/login">Connexion</Link></li>
                    </>
                }
            </ul>
        </nav>
    );
};

export default Navbar;
