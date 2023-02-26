import styled from "styled-components";

export const title = styled.h1`
  line-height: 1;
  font-size: 3rem;
  position: relative;
  z-index: 1;
  text-decoration: none;
  color: #333;
  margin-top: 1rem;
  margin-left: 1rem;
  &:before {
    content: "";
    display: block;
    width: 1.5rem;
    height: 1.5rem;
    background: #fb1;
    position: absolute;
    bottom: 2px;
    left: -5px;
    border-radius: 0.2rem;
    z-index: -1;
  }
`;
