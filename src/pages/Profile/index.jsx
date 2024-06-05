import { Container, Form, Avatar } from "./styles";
import { FiArrowLeft, FiLock, FiUser, FiMail, FiCamera } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../hooks/auth";
import { useState } from "react";
import { Button } from "../../components/Button";
import { api } from "../../services/api";

export function Profile() {
  const { user, updateProfile } = useAuthContext();
  console.log(user);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  const [passwordNew, setPasswordNew] = useState("");
  const [passwordOld, setPasswordOld] = useState("");

  const [avatar, setAvatar] = useState(user.avatar);
  const [avatarFile, setAvatarFile] = useState(null);

  async function handleUpdateProfile() {
    const user = {
      name,
      email,
      password: passwordNew,
      old_password: passwordOld,
    }

    await updateProfile({ user, avatarFile });
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0];
    setAvatarFile(file);

    const imagePreview =  URL.createObjectURL(file);
    setAvatar(imagePreview);
  }

  return (
    <Container>
      <header>
        <Link to="/">
          <FiArrowLeft />
        </Link>
      </header>

      <Form>
        <Avatar>
          <img 
            src={avatar}
            alt="Foto do Usuário" 
          />

          <label htmlFor="avatar">
            <FiCamera />

            <input 
              id="avatar"
              type="file"
              onChange={handleChangeAvatar}
            />
            
          </label>
        </Avatar>
        <Input 
          type="text" 
          icon={FiUser} 
          placeholder="Nome" 
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <Input 
          type="text" 
          icon={FiMail} placeholder="E-mail" 
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <Input 
          type="password" 
          icon={FiLock} 
          placeholder="Senha Atual" 
          onChange={e => setPasswordOld(e.target.value)}
        />

        <Input 
          type="password" 
          icon={FiLock}
          placeholder="Nova Senha"
          onChange={e => setPasswordNew(e.target.value)}
        />

        <Button title="Salvar" onClick={handleUpdateProfile}/>

      </Form>
    </Container>
  )
}