import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Title = styled.h1`
  line-height: 1;
  font-size: 3rem;
  margin: 1rem 0;
  position: relative;
  z-index: 1;
  &::after {
    content: "";
    display: block;
    width: 1.5rem;
    height: 1.5rem;
    background: #fb1;
    position: absolute;
    bottom: 5px;
    left: -5px;
    border-radius: 0.2rem;
    z-index: -1;
  }
`;
export const DisplayFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Nav = styled.nav`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  &.activeNavMobile {
    display: block;
    position: absolute;
    top: 130px;
    right: 0;
    padding: 0 1rem;
    background: white;
    box-shadow: 0 1px 2px rgb(0, 0, 0.2);
    border-radius: 0.2rem;
    transform: translateX(-10px);
    opacity: 1;
  }
  &.activeNavMobile > a,
  &.activeNavMobile > button {
    display: flex;
    align-items: initial;
    background: none;
    width: 100%;
    border: none;
    border-bottom: 1px solid #eee;
    padding: 0.5rem 0;
    cursor: pointer;
  }
`;

export const Link = styled(NavLink)`
  background: #eee;
  border-radius: 0.2rem;
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  transition: 0.1s;
  display: flex;
  align-items: center;
  color: black;
  cursor: pointer;
  &:hover,
  &:focus {
    background: #fff;
    box-shadow: 0 0 0 3px #333;
    border-color: #333;
    outline: none;
  }
  &.active {
    background: #fff;
    box-shadow: 0 0 0 3px #fea;
    border-color: #fb1;
  }
  &.active svg * {
    fill: #fb1;
  }
`;
export const ButtonMobile = styled.button`
  background: #eee;
  border-radius: 0.2rem;
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  transition: 0.1s;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0;

  &::after {
    content: "";
    display: block;
    height: 2px;
    background: currentColor;
    width: 1.2rem;
    border-radius: 3px;
    box-shadow: 0 6px currentColor, 0 -6px currentColor;
    transition: 0.2s;
  }
  &:focus,
  &:hover,
  &.activeButtonMobile {
    outline: none;
    background: white;
    box-shadow: 0 0 0 3px #fea;
    border-color: #fb1;
    color: #fb1;
  }
  &.activeButtonMobile::after {
    transform: rotate(90deg);
    width: 4px;
    height: 4px;
    box-shadow: 0 8px currentColor, 0 -8px currentColor;
  }
`;
