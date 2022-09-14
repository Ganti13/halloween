import styled from "styled-components"

export const Container = styled.header`
  height: 10vh;
  color: #fff;
  padding: 0 10px;
  display: flex;
  width: 100%;
  align-items: center;
  position: fixed;
  justify-content: space-between;
  align-items: center;
  z-index: 1;

  .blood{
    width: 250px;
    transform: translateY(10px);
    filter: grayscale(0.2);
  }

  @media(max-width: 768px){
    .blood{
      width: 150px;
      transform: translateY(-10px);
    }
  }
`

export const Halloween = styled.div`
  position: absolute;
  height: 100%;
  left: 50%;
  transform: translateX(-50%);
  display: grid;
  place-items: center;
  clip-path: polygon(0 0, 100% 0, 85% 100%, 15% 100%);
  background: #090909;
  z-index: -1;

  h1{
    font-family: 'Rubik Dirt', cursive;
    letter-spacing: 5px;
    padding: 10px 35px;
    color: #bebebe;

    &::first-letter{
      color: #b40505;
    }
  }

`

export const LogoIcon = styled.div`
  height: 50px;
  width: 65px;
  border-radius: 35%;
  background-image: url("/logo.gif"); 
  background-size: 200%;
  background-position: center;
  position: relative;
  z-index: -1;

  &::before{
    content: "";
    position: absolute;
    width: 400px;
    height: 420px;
    background: url("/teiaranha.png") no-repeat;
    transform: translate(-50px,-60px);
  }
`