import styled from "styled-components";
import { themes } from "../../../style/themes";
import iconUsuario from "../../assets/usuario.svg";
export const NavFlex = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: ${themes.background};
  align-items: center;
  box-shadow: 0px 1px 1px white;
  padding: 0 15rem 0 15rem;
  color: white;
  padding: 1rem 2rem;
`;
export const LinkNav = styled.span`
  color: white;
  font-size: 1rem;
`;
export const Navh4 = styled.h4`
  display: flex;
  align-items: center;
  &::after {
    margin-left: 10px;
    content: "";
    width: 20px;
    height: 20px;
    display: inline-block;
    background: url(${iconUsuario}) no-repeat;
  }
`;
