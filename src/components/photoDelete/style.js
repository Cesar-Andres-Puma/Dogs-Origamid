import styled from "styled-components";

export const Delete = styled.button`
  background: #ddd;
  padding: 0.4rem 0.6rem;
  line-height: 1;
  border: 1px solid transparent;
  font-size: 0.875rem;
  cursor: pointer;
  border-radius: 0.4rem;
  transition: 0.1s;

  &:focus,
  &:hover {
    outline: none;
    background: none;
    box-shadow: 0 0 0 3px #eee;
    border-color: #333;
  }
`;
