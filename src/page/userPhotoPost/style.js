import styled from "styled-components";

export const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 1rem;
  margin-bottom: 2rem;
  align-items: center;
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
export const InputToSend = styled.input`
  margin-bottom: 1rem;
`;
export const ContainerImg = styled.div`
  max-width: 368px;
`;
export const Img = styled.img`
  display: block;
  width: 100%;
  height: 368px;
  border-radius: 1rem;
  object-fit: cover;
`;
