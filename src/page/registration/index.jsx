import { useContext } from "react";
import { Button } from "../../components/button";
import { Input } from "../../components/input";
import { UserContext } from "../../context";
import { Error } from "../../helper/error";
import { userForm } from "../../hooks";
import { useFetch } from "../../hooks/useFetch";
import { User_POST } from "../../services/api";
import * as S from "./style";

export const Registration = () => {
  const username = userForm();
  const email = userForm("email");
  const password = userForm();
  const { UserLogin } = useContext(UserContext);
  const { loading, error, request } = useFetch();
  const handleSumbit = async (e) => {
    e.preventDefault();
    const { url, options } = User_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });
    const { response } = await request(url, options);
    if (response.ok) UserLogin(username.value, password.value);
    else {
      console.log("nao foi");
    }
  };

  return (
    <section className="container">
      <S.FormContainer onSubmit={handleSumbit} className="animeLeft">
        <S.Title>Cadastro</S.Title>
        <S.FlexLabel>
          <Input label="Usuário" nome="username" type="text" {...username} />
        </S.FlexLabel>
        <S.FlexLabel>
          <Input label="Email" nome="email" type="email" {...email} />
        </S.FlexLabel>
        <S.FlexLabel style={{ marginBottom: "1rem" }}>
          <Input label="Senha" nome="passaword" type="password" {...password} />
        </S.FlexLabel>
        {loading ? (
          <Button disabled>Cadastrando...</Button>
        ) : (
          <Button>Cadastrar</Button>
        )}

        {error && <Error vazio={error} />}
      </S.FormContainer>
    </section>
  );
};
