import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Accueil</Link></li>
                <li><Link to="/register">Inscription</Link></li>
                <li><Link to="/login">Connexion</Link></li>
                <li><Link to="/profile">Profil</Link></li>
                <li><Link to="/addtask">Ajouter une tâche</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
