import { Button } from "../../components/button";
import { Input } from "../../components/input";
import { Error } from "../../helper/error";
import { userForm } from "../../hooks";
import { useFetch } from "../../hooks/useFetch";
import { PASSWORD_LOST } from "../../services/api";
import { InputDogs } from "../registration/style";
import * as S from "./style";
export const Password = () => {
  const login = userForm();
  const { data, loading, error, request } = useFetch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (login.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: window.location.href.replace("perdeu", "resetar"),
      });
      const { json } = await request(url, options);
    }
  };
  return (
    <section className="container">
      <S.FormContainer onSubmit={handleSubmit}>
        <S.Title>Perdeu a senha?</S.Title>
        {data ? (
          <p>{data}</p>
        ) : (
          <>
            <Input
              type={"text"}
              name={"email"}
              label={"Email / Usuário"}
              {...login}
            />
            {loading ? (
              <Button disabled>Enviando...</Button>
            ) : (
              <Button>Enviar Email</Button>
            )}
          </>
        )}
        <Error vazio={error} />
      </S.FormContainer>
    </section>
  );
};
