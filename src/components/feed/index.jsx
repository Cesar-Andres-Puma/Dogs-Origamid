import React from "react";
import { FeedModal } from "../feedModal";
import { FeedPhoto } from "../feedPhoto";
import * as S from "./style";
export const Feed = () => {
  return (
    <S.Section className="ContainerHero">
      <FeedModal />
      <FeedPhoto />
    </S.Section>
  );
};
