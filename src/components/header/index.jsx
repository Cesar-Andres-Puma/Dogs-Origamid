import { NavLink } from "react-router-dom";
import * as S from "./style";
import iconLogo from "../../assets/dogs.svg";
import { UserContext } from "../../context";
import { useContext } from "react";

export const Header = () => {
  const { data, UserLogout } = useContext(UserContext);

  return (
    <S.Header>
      <S.NavFlex className="ContainerHero">
        <NavLink to="/" end>
          <img src={iconLogo} alt="" />
        </NavLink>
        <NavLink to="/login">
          <S.Navh4>
            {data ? (
              <>
                <S.LinkNav>{data.username}</S.LinkNav>
              </>
            ) : (
              <S.LinkNav>Login / Criar</S.LinkNav>
            )}
          </S.Navh4>
        </NavLink>
      </S.NavFlex>
    </S.Header>
  );
};
