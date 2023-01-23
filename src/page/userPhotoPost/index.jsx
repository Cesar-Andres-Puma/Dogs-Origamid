import { Button } from "../../components/button";
import { Input } from "../../components/input";
import * as S from "./style";
import { useState } from "react";
import { userForm } from "../../hooks";
import { useFetch } from "../../hooks/useFetch";
import { PHOTO_POST } from "../../services/api";
export const UserPhotoPost = () => {
  const nome = userForm();
  const peso = userForm("number");
  const idade = userForm("number");
  const [img, setImg] = useState({});
  const { data, error, loading, request } = useFetch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("img", img.raw);
    formData.append("nome", nome.value);
    formData.append("peso", peso.value);
    formData.append("idade", idade.value);

    const token = window.localStorage.getItem("token");
    const { url, options } = PHOTO_POST(formData, token);
    request(url, options);
    console.log(formData);
  };
  const handleImgChange = ({ target }) => {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  };
  return (
    <S.Section className="animeLeft">
      <S.Form onSubmit={handleSubmit}>
        <Input label="Nome" type="text" name="nome" {...nome} />
        <Input label="Peso" type="number" name="peso" {...peso} />
        <Input label="Idade" type="number" name="idade" {...idade} />
        <S.InputToSend
          type="file"
          name="img"
          id="img"
          onChange={handleImgChange}
        />
        <Button>Enviar</Button>
      </S.Form>
      <S.ContainerImg>
        {img.preview && <S.Img src={img.preview} />}
      </S.ContainerImg>
    </S.Section>
  );
};
