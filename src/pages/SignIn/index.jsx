import { Background, Container, Form } from "./styles";
import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { FiMail, FiLock } from "react-icons/fi";

export function SignIn() {
  return (
    <Container>
      <Form type="submit">
        <h1>vnc notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>
        <h2>Faça seu Login</h2>
        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}/>
        <Input
          placeholder="E-mail"
          type="text"
          icon={FiLock}/>

          <Button title="Entrar"/>

          <Link to="/register">Criar Conta</Link>
      </Form>
      <Background />
    </Container>
  )
}