import React from "react";
import { useState } from "react";

import { ReactComponent as Enviar } from "../../assets/enviar.svg";
import { Error } from "../../helper/error";
import { useFetch } from "../../hooks/useFetch";
import { COMMENTS_POST } from "../../services/api";

import * as S from "./style";
export const PhotoCommentsForm = ({ id, setComments }) => {
  const [comment, setComment] = useState("");
  const { request, error } = useFetch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = window.localStorage.getItem("token");
    const { url, options } = COMMENTS_POST(id.id, { comment }, token);
    const { response, json } = await request(url, options);
    if (response.ok) {
      setComment("");
      setComments((comments) => [...comments, json]);
    }
  };
  return (
    <>
      <S.Form onSubmit={handleSubmit}>
        <S.TextArea
          id="comment"
          name="comment"
          placeholder="Comente..."
          value={comment}
          onChange={({ target }) => setComment(target.value)}
        />
        <S.Button>
          <Enviar />
        </S.Button>
        <Error vazio={error} />
      </S.Form>
    </>
  );
};
