import { createGlobalStyle } from "styled-components";
import login from "../src/assets/login.jpg";
export const Global = createGlobalStyle`

*{ 
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
body{
    background-color:black;
    color: white;
    
    }
a{
    text-decoration: none;
}
li{
    list-style: none;
}
.LinkPassword{
  margin: 2.5rem 0;
  display: inline-block;
  color: #666;
  padding: 0.5rem 0;
  line-height: 1;
  width: max-content;
  &::after {
    content: "";
    height: 2px;
    width: 100%;
    background: currentColor;
    display: block;
  }
}
.LinkRegistro{
    font-size: 1rem;
   width: max-content;
   text-align: center;
    cursor: pointer;
    border: none;
    border-radius: 0.4rem;
    background: #fb1;
    color: #764701;
    min-width: 8rem;
    padding: 0.4rem 1.2rem;
    box-sizing: border-box;
    transition: .1s;
:hover,
  :focus {
    outline: none;
    box-shadow: 0 0 0 3px #fea, 0 0 0 4px #fb1;
  }
}
.animeLeft{
  opacity: 0;
  transform: translateX(-20px);
  animation: animeLeft .3s forwards;
}
@keyframes animeLeft{
  to{
    opacity: 1;
    transform:  initial;
  }
}
.container{
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
  grid-gap: 2rem;
  gap: 2rem;
  &::before {
    display: block;
    content: "";
    background: url(${login}) no-repeat 50%;
    background-size: cover;
  }
}
`;
