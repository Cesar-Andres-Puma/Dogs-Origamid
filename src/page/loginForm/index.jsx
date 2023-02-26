import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import * as S from "./style";
import iconOlho from "../../assets/icon-de-olho.svg";
import IconOlhoFechado from "../../assets/olho-fechado.svg";
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { userForm } from "../../hooks";
import { UserContext } from "../../context";

export const LoginForm = () => {
  const { login, error, loading } = useContext(UserContext);
  const username = userForm();
  const password = userForm();
  const [iconPassword, setIconPassword] = useState(false);
  const { UserLogin } = useContext(UserContext);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (username.validate() && password.validate()) {
      UserLogin(username.value, password.value);
    }
  };
  return (
    <section className="container">
      <S.FormContainer onSubmit={handleSubmit} className="animeLeft">
        <S.Title>Login</S.Title>
        <S.FlexLabel>
          <Input label="Usuario" type="text" name="username" {...username} />
        </S.FlexLabel>
        <S.FlexLabel>
          <Input
            label="Senha"
            nome="password"
            type={iconPassword ? "text" : "password"}
            {...password}
          />
          <div onClick={() => setIconPassword((prev) => !prev)}>
            {iconPassword ? (
              <S.IconEyes src={iconOlho} alt="" />
            ) : (
              <S.IconEyes src={IconOlhoFechado} />
            )}
          </div>
          {error && <p>{error}</p>}
        </S.FlexLabel>
        {loading ? <Button>Carregando...</Button> : <Button>Entrar</Button>}

        <NavLink to="senha" className="LinkPassword">
          Perdeu a senha?
        </NavLink>
        <S.SubTitlePrimary>Cadastre-se</S.SubTitlePrimary>

        <S.Paragraf>Ainda nao possui conta? Cadastre-se no site</S.Paragraf>
        <NavLink to="registro" className="LinkRegistro">
          Cadastro
        </NavLink>
      </S.FormContainer>
    </section>
  );
};
