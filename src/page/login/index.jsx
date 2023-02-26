import { Route, Routes, Navigate } from "react-router-dom";
import { LoginForm } from "../loginForm";
import { Password } from "../Password";
import { Registration } from "../registration";
import { UserContext } from "../../context";
import { useContext } from "react";
import { Error } from "../error";
export const Login = () => {
  const { login } = useContext(UserContext);
  if (login === true) return <Navigate to="/conta" />;
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="senha" element={<Password />} />
        <Route path="registro" element={<Registration />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};
