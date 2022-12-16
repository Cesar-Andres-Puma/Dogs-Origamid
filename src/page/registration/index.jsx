import { Button } from "../../components/button";
import { Input } from "../../components/input";
import * as S from "./style";

export const Registration = () => {
  return (
    <section className="container">
      <S.FormContainer className="animeLeft">
        <S.Title>Cadastro</S.Title>
        <S.FlexLabel>
          <S.SubTitle>Usuario</S.SubTitle>
          <S.InputDogs />
        </S.FlexLabel>
        <S.FlexLabel>
          <S.SubTitle>Email</S.SubTitle>
          <S.InputDogs />
        </S.FlexLabel>
        <S.FlexLabel style={{ marginBottom: "1rem" }}>
          <S.SubTitle>Senha</S.SubTitle>
          <S.InputDogs />
        </S.FlexLabel>
        <Button>Cadastrar</Button>
      </S.FormContainer>
    </section>
  );
};
