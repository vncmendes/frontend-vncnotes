import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";
import { Container, Form } from "./styles";
import { NoteItem } from "../../components/NoteItem";
import { Link } from "react-router-dom";


export function New() {
  return (
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <h1>Criar Nota</h1>
            <Link to="/">Voltar</Link>
          </header>
          <Input placeholder="Título"/>
          <Textarea placeholder="Observações"/>

          <Section title="Links Úteis">
            <NoteItem value={"https://github.com/vncmendes"} />
            <NoteItem placeholder="Novo Link" isNew/>
          </Section>

          <Section title="Marcadores">
            <div className="tags">
              <NoteItem value="react" />
              <NoteItem placeholder="Nova Tag" isNew/>
            </div>
          </Section>

          <Button title="Salvar"/>
        </Form> 
      </main>
    </Container>
  )
}