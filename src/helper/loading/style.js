import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  display: flex;
  top: 0;
  left: 0;
  z-index: 1000;
  .Loading {
    margin: auto;
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.5);
    padding-left: 5px;
  }
`;
