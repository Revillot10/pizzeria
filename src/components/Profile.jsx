import React from "react";
import { Button } from "react-bootstrap";
import { useUser } from "../context/UserContext"; 

const Profile = () => {
  const { email, logout } = useUser(); 

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div style={{ width: "800px", padding: "20px", border: "1px solid #ddd", borderRadius: "10px" }}>
        <h2 className="text-center mb-4">Bienvenido!</h2>

        <p className="text-center"><strong>Email:</strong> {email}</p>

        <Button 
          variant="dark" 
          className="d-flex justify-content-center mx-auto text-white" 
          onClick={logout}
        >
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Profile;
