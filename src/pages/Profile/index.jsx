import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useAuthContext } from "../../hooks/auth";
import { Container, Form, Avatar } from "./styles";
import defaultImg from "../../assets/34182763n901748-hb-0007.jpg";
import { FiArrowLeft, FiLock, FiUser, FiMail, FiCamera } from "react-icons/fi";

export function Profile() {
  const { user, updateProfile } = useAuthContext();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  const [passwordNew, setPasswordNew] = useState("");
  const [passwordOld, setPasswordOld] = useState("");

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : defaultImg;

  const [avatar, setAvatar] = useState(avatarUrl);
  const [avatarFile, setAvatarFile] = useState(null);

  async function handleUpdateProfile() {
    const updated = {
      name,
      email,
      password: passwordNew,
      old_password: passwordOld,
    }

    const userUpdated = Object.assign(user, updated);

    await updateProfile({ user: userUpdated, avatarFile });
  }

  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0];
    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);
  }

  return (
    <Container>
      <header>
        <button type="button" onClick={handleBack}>
          <FiArrowLeft />
        </button>
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