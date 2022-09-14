import styled, { keyframes } from "styled-components"

const animate = keyframes`
  20%,80%{
    transform: translateY(0) scale(1);
    filter: blur(0);
    opacity: 1;
    -webkit-filter: drop-shadow(2px 2px red);
  }
  90%{
    opacity: 1;
  }
  100%{
    transform: translateY(-300%) scale(1.5);
    letter-spacing: 10px;
    -webkit-filter: blur(35px) contrast(10px);
    opacity: 0;
  }
`

const textAnimate = keyframes`
  to{
    transform: scale(1);
    opacity: 1;
  }
`

export const Container = styled.main`
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: rgba(0,0,0,.8);
  z-index: -3;
  position: relative;
  overflow: hidden;

  h2{
    transform: translateY(200%) scale(0);
    filter: blur(10px);
    position: absolute;
    font-family: 'Creepster', cursive;
    font-size: max(30px, 5vw);
    text-align: center;
    white-space: nowrap;
    text-transform: uppercase;
    font-weight: 900;
    -webkit-text-stroke: 1px green;
    filter: drop-shadow(2px 2px red);
    -webkit-filter: drop-shadow(2px 2px red);
    animation: ${animate} 4s linear;

    &:first-child{
      animation-delay: 1s;
    }

    &:nth-child(2){
      animation-delay: 5s;
    }

    &:nth-child(3){
      animation-delay: 9s;
    }

    &:nth-child(4){
      animation-delay: 13s;
    }
  }

`

export const Text = styled.h1`
  background-image:  url("/zombies.gif");
  background-position: center;
  background-size: 100%;
  background-clip: text;
  -webkit-background-clip: text;
  font-family: 'Creepster', cursive;
  letter-spacing: 5px;
  font-weight: 900;
  color: transparent;
  font-size: max(10vw, 80px);
  transform: scale(0);
  opacity: 0;
  animation: ${textAnimate} 2s 17s ease forwards;
`




