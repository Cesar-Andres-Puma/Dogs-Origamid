import React from "react";
import { Route, Routes } from "react-router-dom";
import { UserHeader } from "../../components/userHeader";
import { Conta } from "../Conta";
import { UserPhotoPost } from "../userPhotoPost";
import { UserStatic } from "../userStats";
import * as S from "./style";
export const User = () => {
  return (
    <S.Section className="ContainerHero">
      <UserHeader />
      <Routes>
        <Route path="/*" element={<Conta />} />
        <Route path="postar" element={<UserPhotoPost />} />
        <Route path="estatistica" element={<UserStatic />} />
      </Routes>
    </S.Section>
  );
};
