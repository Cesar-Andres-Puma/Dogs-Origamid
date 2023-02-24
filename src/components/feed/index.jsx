import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { UserContext } from "../../context";
import { FeedModal } from "../feedModal";
import { FeedPhoto } from "../feedPhoto";
import * as S from "./style";
export const Feed = ({ user }) => {
  const [modalPhoto, setModalPhoto] = useState(null);
  return (
    <S.Section className="ContainerHero" style={{ marginTop: "2rem" }}>
      {modalPhoto && (
        <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />
      )}
      <FeedPhoto user={user} setModalPhoto={setModalPhoto} />
    </S.Section>
  );
};
