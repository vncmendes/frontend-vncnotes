import { Container, Brand, Menu, Search, Content, NewNote } from "./styles";
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Section } from "../../components/Section";
import { Tags } from "../../components/Tags";
import { Input } from "../../components/Input";
import { FiSearch } from "react-icons/fi";
import { Note } from "../../components/Note";

export function Home() {
  return (
    <Container>
      <Brand>
        <h1>vncNotes</h1>
      </Brand>

      <Header/>

      <Menu>
        <li><ButtonText title="Todos" isActive /></li>
        <li><ButtonText title="Nodejs"/></li>
        <li><ButtonText title="Figma"/></li>
      </Menu>

      <Search>
        <Input placeholder="Pesquisar por Título" icon={FiSearch}/>
      </Search>

      <Content>
        <Section title="Minhas Notas" >
          <Note data={{
            title: "React",
            tags: [
              { id: "1", name: "Nodejs" },
              { id: "2", name: "Express" }
            ]
          }}
          />
        </Section>

      </Content>

      <NewNote>
        <ButtonText title="+ Criar Nota" />
      </NewNote>

    </Container>
  )
}