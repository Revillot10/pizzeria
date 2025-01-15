import React, { createContext, useState, useContext } from "react";

// Base URL de la API
const API_BASE_URL = "http://localhost:5000";

export const UserContext = createContext();
export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [email, setEmail] = useState(localStorage.getItem("email") || '');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [profile, setProfile] = useState(null);

  // Método para realizar login
  const login = async (credentials) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        throw new Error("Error en el inicio de sesión");
      }

      const data = await response.json();

      if (data.token && data.token !== '') {
        setToken(data.token);
        setEmail(data.email);

        // Guardar en localStorage solo si el token es válido
        localStorage.setItem("token", data.token);
        localStorage.setItem("email", data.email);
      } else {
        throw new Error("Token inválido");
      }
    } catch (err) {
      setError(err.message); // Establecer el error
    } finally {
      setLoading(false);
    }
  };

  // Método para realizar registro
  const register = async (credentials) => {
    setLoading(true);
    setError(null); 
    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        throw new Error("Error en el registro");
      }

      const data = await response.json();
      if (data.token && data.token !== '') {
        setToken(data.token);
        setEmail(data.email);

        // Guardar en localStorage
        localStorage.setItem("token", data.token);
        localStorage.setItem("email", data.email);
      }
    } catch (err) {
      setError(err.message); 
    } finally {
      setLoading(false);
    }
  };

  // Método para realizar logout
  const logout = () => {
    setToken(null);
    setEmail(null);
    setProfile(null);

    // Eliminar del localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("email");
  };

  // Método para obtener el perfil del usuario autenticado
  const getProfile = async () => {
    if (!token) {
      setError("No estás autenticado");
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/me`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Error al obtener el perfil");
      }

      const data = await response.json();
      setProfile(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <UserContext.Provider
      value={{
        token,
        email,
        loading,
        error,
        profile,
        login,
        register,
        logout,
        getProfile,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
