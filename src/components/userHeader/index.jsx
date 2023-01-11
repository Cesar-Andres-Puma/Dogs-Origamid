import { NavLink, useLocation } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context";

import { ReactComponent as IconFeed } from "../../assets/feed.svg";
import { ReactComponent as IconStatistic } from "../../assets/estatisticas.svg";
import { ReactComponent as IconAdd } from "../../assets/adicionar.svg";

import { ReactComponent as IconExit } from "../../assets/sair.svg";

import * as S from "./style";
import { useState } from "react";
import { useEffect } from "react";
import { useMedia } from "../../hooks/useMedia";

export const UserHeader = () => {
  const { UserLogout } = useContext(UserContext);
  const [title, setTitle] = useState("");
  const mobile = useMedia("(max-width:40rem)");
  const [activeMobile, setActiveMobile] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => {
    setActiveMobile(false);
  }, [pathname]);
  const location = useLocation();
  useEffect(() => {
    const { pathname } = location;
    switch (pathname) {
      case "/conta/feed":
        setTitle("Minha conta");
        break;
      case "/conta/estatistica":
        setTitle("Estatísticas");
        break;
      case "/conta/postar":
        setTitle("Poste Sua Foto");
        break;
      default:
        setTitle("Minha Conta");
    }
  }, [location]);
  return (
    <>
      <S.DisplayFlex>
        <S.Title>{title}</S.Title>
        {mobile && (
          <S.ButtonMobile
            className={activeMobile && "activeButtonMobile"}
            onClick={() => setActiveMobile((prev) => !prev)}
          />
        )}
        <S.Nav
          className={`${mobile ? "activeNavMobile" : ""} ${
            activeMobile && "navMobileActive"
          }`}
        >
          <S.Link to="/conta" end>
            <IconFeed />
            {mobile && <span>Minhas Fotos</span>}
          </S.Link>
          <S.Link to="estatistica">
            <IconStatistic />
            {mobile && <span>Estatísticas</span>}
          </S.Link>
          <S.Link to="postar">
            <IconAdd />
            {mobile && <span>Adicionar Foto</span>}
          </S.Link>
          <S.Link to="login" onClick={UserLogout}>
            <IconExit />
            {mobile && <span>sair</span>}
          </S.Link>
        </S.Nav>
      </S.DisplayFlex>
    </>
  );
};
