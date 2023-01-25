import styled from "styled-components";
import view from "../../assets/visualizacao.svg";

export const Li = styled.li`
  display: grid;
  overflow: hidden;
  cursor: pointer;
  border-radius: 0.2rem;
`;
export const Img = styled.img`
  width: 100%;
  grid-area: 1/1;
`;
export const Span = styled.span`
  grid-area: 1/1;
  background-color: rgba(0, 0, 0, 0.3);
  color: white;
  font-size: 1rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  &:hover {
    opacity: 1;
  }
  &::before {
    width: 16px;
    height: 10px;
    content: "";
    display: inline-block;
    margin-right: 0.25rem;
    background: url(${view}) no-repeat;
  }
`;
