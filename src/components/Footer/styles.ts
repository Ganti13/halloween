import styled, {keyframes} from "styled-components"

const animateGhost = keyframes`
  0%, 5%,7.5%,10%, 39%,44%, 85%, 87.5%, 93%,100%{
    opacity: 0;
  }
  6%, 9%, 40%, 43%, 86%, 89%, 92%{
    opacity: .2;
  }
`

export const Container = styled.div`
  width: 100%;
  height: 10vh;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  color: white;
  z-index: 10000;

  img{
    position: absolute;
    left: 20px;
    bottom: 0;
    height: 250px;
    opacity: .2;

    animation: ${animateGhost} 5s linear infinite;
  }
`