import styled from "styled-components";

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: stretch;
`;

export const TextArea = styled.textarea`
  display: block;
  max-width: 500px;
  font-size: 1rem;
  resize: none;
  border: 1px solid #eee;
  padding: 0.2rem 0.5rem;
  border-radius: 0.2rem;
  background-color: #eee;
  transition: 0.2s;
  &:focus,
  &:hover {
    outline: none;
    border-color: #fb1;
    background-color: white;
    box-shadow: 0 0 0 3px #fea;
  }
`;
export const Button = styled.button`
  border: none;
  cursor: pointer;
  color: #333;
  background-color: transparent;
  font-size: 1rem;
  padding: 0 1rem;
  overflow: hidden;
  &:focus > svg path,
  &:hover > svg path {
    fill: #fea;
    stroke: #db1;
  }
  &:focus svg g,
  &:hover > svg g {
    animation: latir 0.6s infinite;
  }

  @keyframes latir {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
