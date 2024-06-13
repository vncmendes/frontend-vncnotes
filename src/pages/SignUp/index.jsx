import { Background, Container, Form } from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { FiMail, FiLock, FiUser } from "react-icons/fi";
import { useState } from "react";
import { api } from "../../services/api";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleCreate() {
    if (!name || !email || !password) {
      alert("All fields are required !");
    }

    api.post("/users", { name, email, password })
    .then(() => { 
      alert("User succesfully registered !");
      navigate("/");
    })
    .catch(error => {
      if (error.response) {
        alert(error.response.data.message);
      }
      else {
        alert("Sorry Something Went wrong, Unable to Register");
      }
    }) 

  }

  return (
    <Container>
      <Background />

      <Form type="submit">
        <h1>vnc notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>
        <h2>Crie sua Conta</h2>
        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
          onChange={event => setName(event.target.value)}/>

        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          onChange={event => setEmail(event.target.value)}/>

        <Input
          placeholder="Password"
          type="password"
          icon={FiLock}
          onChange={event => setPassword(event.target.value)}/>

          <Button title="Cadastrar" onClick={handleCreate}/>

          <Link to="/">Voltar para o Login</Link>
      </Form>
    </Container>
  )
}