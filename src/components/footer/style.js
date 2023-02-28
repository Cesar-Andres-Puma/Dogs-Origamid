import styled from "styled-components";
import { themes } from "../../../style/themes";
export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${themes.background};
  padding: 3rem 1rem 0 1rem;
  height: 10rem;
`;
export const IconFooter = styled.img`
  width: 25px;
  height: 20px;
  margin-bottom: 20px;
`;
