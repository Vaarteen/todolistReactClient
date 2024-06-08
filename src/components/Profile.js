import React, { useEffect, useState } from 'react';
import axios from 'axios';
function Profile() {
    const [user, setUser] = useState(null);
    useEffect(() => {
        const fetchUser = async () => {
            // On cherche le token dans le localStorage
            const token = localStorage.getItem('authToken');
            if (!token) return; // pas de token => pas connecté
            try {
                // On récupère l'utilisateur en DB en passant le token dans
                // l'en-tête HTTP authorization qui sera lue côté serveur
                const { data } = await axios.get('/api/auth/profile', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setUser(data); // mise à jour de l'état
            } catch (error) {
                console.error(error);
            }
        };
        fetchUser();
    }, []);
    return (
        <div>
            <h2>Profile</h2>
            {user ? (
                <div>
                    <p>Username: {user.username}</p>
                </div>
            ) : (
                <p>Loading...</p >
            )}
        </div>
    );
}
export default Profile;
