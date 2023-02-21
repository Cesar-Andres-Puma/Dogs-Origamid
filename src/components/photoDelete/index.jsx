import React from "react";
import { useFetch } from "../../hooks/useFetch";
import { PHOTO_DELETE } from "../../services/api";
import * as S from "./style";
export const PhotoDelete = ({ id }) => {
  const { loading, request } = useFetch();
  const handleClick = async () => {
    const confirm = window.confirm("tem certeza que deseja deletar?");
    if (confirm) {
      const token = window.localStorage.getItem("token");
      const { url, options } = PHOTO_DELETE(id, token);
      const { response } = await request(url, options);
      if (response.ok) window.location.reload();
    }
  };
  return (
    <>
      {loading ? (
        <S.Delete>Deletar</S.Delete>
      ) : (
        <S.Delete onClick={handleClick}>deletar</S.Delete>
      )}
    </>
  );
};
