import styled from "styled-components";

export const FormContainer = styled.form`
  max-width: 30rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  margin-top: 20vh;
`;
export const FlexLabel = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;
export const Title = styled.h1`
  line-height: 1;
  font-size: 3rem;
  position: relative;
  z-index: 1;
  &:before {
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
