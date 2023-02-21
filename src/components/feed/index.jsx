import React from "react";
import { useState } from "react";
import { FeedModal } from "../feedModal";
import { FeedPhoto } from "../feedPhoto";
import * as S from "./style";
export const Feed = () => {
  const [modalPhoto, setModalPhoto] = useState(null);
  return (
    <S.Section className="ContainerHero" style={{ marginTop: "2rem" }}>
      {modalPhoto && (
        <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />
      )}
      <FeedPhoto setModalPhoto={setModalPhoto} />
    </S.Section>
  );
};
