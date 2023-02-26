import React from "react";
import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { Feed } from "../../components/feed";
import { UserHeader } from "../../components/userHeader";
import { UserContext } from "../../context";
import { Conta } from "../Conta";
import { Error } from "../error";
import { UserPhotoPost } from "../userPhotoPost";
import { UserStatic } from "../userStats";
import * as S from "./style";
export const User = () => {
  const { data } = useContext(UserContext);
  return (
    <S.Section className="ContainerHero">
      <UserHeader />
      <Routes>
        <Route path="/*" element={<Feed user={data.id} />} />
        <Route path="postar" element={<UserPhotoPost />} />
        <Route path="estatistica" element={<UserStatic />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </S.Section>
  );
};
