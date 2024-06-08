import React from 'react';

function Logout({ handleLogout }) {
    return (
        <button onClick={handleLogout}>Déconnexion</button>
    );
};

export default Logout;
