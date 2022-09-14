import {  Container, Halloween, LogoIcon } from "./styles"
import blood from "../../assets/img/blood1.png"


const Header = () => {

  return(
    <Container>
      <LogoIcon />
      <Halloween><h1>Halloween</h1></Halloween>
      <img className="blood" src={blood} alt="blood image" />
    </Container>
  )
}

export default Header