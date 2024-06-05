import { Container, Profile, Logout } from "./styles";
import { RiShutDownLine } from "react-icons/ri";
import { useAuthContext } from "../../hooks/auth";

export function Header() {
  const { signOut } = useAuthContext();
  function handleSignOut() {
    signOut();
  }

  return (
    <Container>
      <Profile to="/profile">
        <img 
          src="https://github.com/vncmendes.png"
          alt="User Photo"  
        />
        <div>
          <span>Bem-vindo</span>
          <strong>Vinicius Mendes</strong>
        </div>
      </Profile>

      <Logout onClick={handleSignOut}>
        <RiShutDownLine/>
      </Logout>

    </Container>
  )
}