import iconViewBlack from "../../assets/visualizacao-black.svg";

import styled from "styled-components";
export const Container = styled.div`
  margin: auto;
  max-height: 36rem;
  border-radius: 0.2rem;
  background-color: white;
  display: grid;
  grid-template-columns: 36rem 20rem;
  grid-template-rows: auto 1fr auto;
  overflow: hidden;
  color: black;
  opacity: 0;
  transform: scale(0.8);
  animation: scaleUp 0.3s forwards;
  @keyframes scaleUp {
    to {
      opacity: initial;
      transform: initial;
    }
  }
  .details {
    padding: 2rem 2rem;
  }
  .author {
    opacity: 0.5;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .author > a:hover {
    text-decoration: underline;
  }
  .visualizacoes {
    @media (max-width: 375px) {
      margin-right: 20px;
    }
  }
  .visualizacoes::before {
    content: "";
    display: inline-block;
    width: 16px;
    height: 10px;
    margin-right: 0.5rem;
    background: url(${iconViewBlack});
  }
  .attributes {
    display: flex;
    font-size: 1.125rem;
    font-weight: bold;
    margin: 1rem 0 2rem 0;
  }
  .attributes > li {
    margin-right: 2rem;
  }
  .attributes > li::before {
    content: "";
    display: inline-block;
    height: 20px;
    margin-right: 0.5rem;
    position: relative;
    top: 3px;
    width: 2px;
    background-color: #333;
    margin-top: 5px;
  }
  .comments {
    padding: 0 2rem;
  }
  .title > a {
    line-height: 1;
    font-size: 3rem;
    position: relative;
    z-index: 1;
    text-decoration: none;
    color: #333;
  }
  .title > a::before {
    content: "";
    display: block;
    width: 1.5rem;
    height: 1.5rem;
    background: #fb1;
    position: absolute;
    bottom: 15px;
    left: -5px;
    border-radius: 0.2rem;
    z-index: -1;
  }
  @media (max-width: 64rem) {
    height: auto;
    max-height: calc(100vh - 4rem);
    overflow-y: auto;
    grid-template-columns: minmax(20rem, 40rem);
  }
`;

export const StyleImg = styled.div`
  & > img {
    width: 100%;
    grid-row: 1/4;
  }
`;
