import { createContext, useEffect, useState } from "react";
import { Get_User, Token_Post, Token_Validate_Post } from "../services/api";
import { useNavigate } from "react-router-dom";
export const UserContext = createContext();
export const UserStorage = ({ children }) => {
  const [data, setData] = useState(null);
  const [login, setLogin] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const UserLogout = async () => {
    setData(null);
    setError(null);
    setLogin(false);
    setLoading(false);
    window.localStorage.removeItem("token");
    navigate("/Login");
  };
  useEffect(() => {
    const AutoLogin = async () => {
      const token = window.localStorage.getItem("token");

      if (token) {
        try {
          setError(null);
          setLoading(true);
          const { url, options } = Token_Validate_Post(token);
          const response = await fetch(url, options);
          if (!response.ok) throw new Error("token invalido");
          await GetUser(token);
        } catch (error) {
          UserLogout();
        } finally {
          setLoading(false);
        }
      }
    };
    AutoLogin();
  }, []);
  const GetUser = async (token) => {
    const { url, options } = Get_User(token);
    const response = await fetch(url, options);
    const json = await response.json();
    setData(json);
    setLogin(true);
  };
  const UserLogin = async (username, password) => {
    try {
      setError(null);
      setLoading(true);
      const { url, options } = Token_Post({ username, password });
      const tokenRes = await fetch(url, options);
      if (!tokenRes.ok) throw new Error(`Error: Usuario invalido`);
      const { token } = await tokenRes.json();
      console.log(token);
      window.localStorage.setItem("token", token);
      await GetUser(token);
      navigate("/conta");
    } catch (error) {
      setError(error.message);
      setLogin(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <UserContext.Provider
      value={{ UserLogin, data, UserLogout, error, loading, login }}
    >
      {children}
    </UserContext.Provider>
  );
};
