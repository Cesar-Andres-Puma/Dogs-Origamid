import styled from "styled-components";

export const Ul = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 1rem;
  justify-items: center;
  li:nth-child(2) {
    grid-column: 2/4;
    grid-row: span 2;
  }
  @media (max-width: 40rem) {
    grid-template-columns: repeat(2, 1fr);
    li:nth-child(2) {
      grid-column: initial;
      grid-row: initial;
    }
  }
`;
