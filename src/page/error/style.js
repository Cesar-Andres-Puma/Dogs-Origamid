import styled from "styled-components";

export const title = styled.h1`
  line-height: 1;
  font-size: 2.5rem;
  position: relative;
  z-index: 1;
  text-decoration: none;
  color: #333;
  margin: 2rem 0 1rem 0;
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
