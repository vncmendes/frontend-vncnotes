import { Background, Container, Form } from "./styles";
import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { FiMail, FiLock, FiUser } from "react-icons/fi";

export function SignUp() {
  return (
    <Container>
      <Background />

      <Form type="submit">
        <h1>vnc notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>
        <h2>Crie sua Conta</h2>
        <Input
          placeholder="E-Nome"
          type="text"
          icon={FiUser}/>

        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}/>

        <Input
          placeholder="E-mail"
          type="text"
          icon={FiLock}/>

          <Button title="Cadastrar"/>

          <Link to="/">Voltar para o Login</Link>
      </Form>
    </Container>
  )
}