import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/button";
import { Input } from "../../components/input";
import { Error } from "../../helper/error";
import { userForm } from "../../hooks";
import { useFetch } from "../../hooks/useFetch";
import { PASSWORD_RESET } from "../../services/api";
import * as S from "./style";
export const PasswordReset = () => {
  const { login, setLogin } = useState("");
  const { key, setKey } = useState("");
  const { error, loading, request } = useFetch();
  const password = userForm();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password.validade()) {
      const { url, options } = PASSWORD_RESET({
        login,
        key,
        password: password.value,
      });
      const { response } = await request(url, options);
      if (response.ok) {
        navigate("/login");
      }
    }
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get("key");
    const login = params.get("login");
    if (key) setKey(key);
    if (login) setLogin(login);
  }, []);
  return (
    <section className="container">
      <S.FormContainer onSubmit={handleSubmit}>
        <S.Title>Resete a senha</S.Title>
        <Input
          label={"Nova Senha"}
          type={"password"}
          name={"password"}
          {...password}
        />
        {loading ? (
          <Button disabled>Resetando...</Button>
        ) : (
          <Button>Resetar</Button>
        )}
        <Error vazio={error} />
      </S.FormContainer>
    </section>
  );
};
