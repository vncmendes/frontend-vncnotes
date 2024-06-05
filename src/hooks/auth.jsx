import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function signIn({ email, password }) {

    try {
      const response = await api.post("/sessions", { email, password });
      const { user, token } = response.data;

      localStorage.setItem("@vncnotes:user", JSON.stringify(user));
      localStorage.setItem("@vncnotes:token", token);

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      setData({ user, token});
    }
    catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      }
      else {
        alert("Unauthorized !");
      }
    }
  }

  async function updateProfile({ user, avatarFile }) {
    try {
      
      if (avatarFile) {
        const fileUploadForm = new FormData();
        fileUploadForm.append("avatar", avatarFile);

        const response = await api.patch("/users/avatar", fileUploadForm);
        user.avatar = response.data.avatar;
      }

      await api.put("/users", user);
      localStorage.setItem("@vncnotes:user", JSON.stringify(user));
      setData({ user: user, token: data.token});
      alert("Profile Updated with Success !");
    }
    catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      }
      else {
        alert("Unauthoprized !");
      }
    }
  }

  function signOut() {
    localStorage.removeItem("@vncnotes:user");
    localStorage.removeItem("@vncnotes:token");

    setData({});
  }

  useEffect(() => {
    const user = localStorage.getItem("@vncnotes:user");
    const token = localStorage.getItem("@vncnotes:token");

    if (user && token) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      setData({ 
        user: JSON.parse(user), 
        token
      })
    }

  }, []);
  
  return (
    <AuthContext.Provider value={{ 
      signIn, 
      user: data.user,
      signOut,
      updateProfile
    }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuthContext() {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuthContext }