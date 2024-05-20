import { Container, Profile, Logout } from "./styles";
import { RiShutDownLine } from "react-icons/ri";

export function Header() {
  return (
    <Container>
      <Profile>
        <img 
          src="https://github.com/vncmendes.png"
          alt="User Photo"  
        />
        <div>
          <span>Bem-vindo</span>
          <strong>Vinicius Mendes</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine/>
      </Logout>

    </Container>
  )
}