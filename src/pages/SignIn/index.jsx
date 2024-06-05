import { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import { FiMail, FiLock } from "react-icons/fi";
import { Button } from "../../components/Button";
import { useAuthContext } from "../../hooks/auth";
import { Background, Container, Form } from "./styles";

export function SignIn() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const { signIn } = useAuthContext();

  function handleSignIn() {
    signIn({ email, password});
  }

  return (
    <Container>
      <Form type="submit">
        <h1>vnc notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>
        <h2>Faça seu Login</h2>

        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          onChange={e => setEmail(e.target.value)}
        />

        <Input
          placeholder="Password"
          type="password"
          icon={FiLock}
          onChange={e => setPassword(e.target.value)}
        />

          <Button title="Entrar" onClick={handleSignIn}/>
          <Link to="/register">Criar Conta</Link>
      </Form>
      <Background />
    </Container>
  )
}