import styled from "styled-components";
import { themes } from "../../../style/themes";
import iconUsuario from "../../assets/usuario.svg";
export const Header = styled.header`
  box-shadow: 0 1px 1px rgb(0 0 0 / 10%);
  position: sticky;
  width: 100%;
  z-index: 100;
  background: #fff;
  top: 0;
`;
export const NavFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
`;
export const LinkNav = styled.span`
  font-size: 0.9rem;
  color: black;
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
