import React from "react";
import { useState } from "react";
import { FeedModal } from "../feedModal";
import { FeedPhoto } from "../feedPhoto";
import * as S from "./style";
export const Feed = () => {
  const [modalPhoto, setModalPhoto] = useState(null);
  return (
    <S.Section className="ContainerHero">
      {modalPhoto && (
        <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />
      )}
      <FeedPhoto setModalPhoto={setModalPhoto} />
    </S.Section>
  );
};
