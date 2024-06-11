import { Container, Profile, Logout } from "./styles";
import { RiShutDownLine } from "react-icons/ri";
import { useAuthContext } from "../../hooks/auth";
import { api } from "../../services/api";
import defaultImg from "../../assets/34182763n901748-hb-0007.jpg"

export function Header() {
  const { signOut, user } = useAuthContext();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : defaultImg;

  function handleSignOut() {
    signOut();
  }

  return (
    <Container>
      <Profile to="/profile">
        <img 
          src={avatarUrl}
          alt="User Photo"  
        />
        <div>
          <span>Bem-vindo</span>
          <strong>{user.name}</strong>
        </div>
      </Profile>

      <Logout onClick={handleSignOut}>
        <RiShutDownLine/>
      </Logout>

    </Container>
  )
}