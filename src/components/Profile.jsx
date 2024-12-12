import React from 'react';

const Profile = () => {
  const userEmail = 'usuario@example.com';

  const handleLogout = () => {
    console.log('Cerrando sesión...');
  };

  return (
    <div className="profile-container">
      <h2>Bienvenido, {userEmail}</h2>
      <button onClick={handleLogout}>Cerrar sesión</button>
    </div>
  );
};

export default Profile;
