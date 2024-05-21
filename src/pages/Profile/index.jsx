import { Container, Form, Avatar } from "./styles";
import { FiArrowLeft, FiLock, FiUser, FiMail, FiCamera } from "react-icons/fi";
import {Input} from "../../components/Input";
import { Link } from "react-router-dom";

export function Profile() {
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
            src="https://github.com/vncmendes.png" 
            alt="Foto do Usuário" 
          />

          <label htmlFor="avatar">
            <FiCamera />

            <input 
              id="avatar"
              type="file" 
            />
            
          </label>
        </Avatar>
        <Input title="" icon={FiUser} placeholder="Nome"/>
        <Input title="" icon={FiMail} placeholder="E-mail"/>
        <Input title="" icon={FiLock} placeholder="Senha Atual"/>
        <Input title="" icon={FiLock} placeholder="Nova Senha"/>
      </Form>
    </Container>
  )
}