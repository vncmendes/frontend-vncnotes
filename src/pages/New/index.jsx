import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";
import { Container, Form } from "./styles";
import { NoteItem } from "../../components/NoteItem";
import { useState } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { ButtonText } from "../../components/ButtonText";

export function New() {
  const [links, setLinks] = useState([]);
  const [newLink, setNewLink] = useState();

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  function handleAddLink() {
    setLinks(prevState => [...prevState, newLink]);
    setNewLink("");
  }

  function handleRemoveLink(deleted) {
    setLinks(prevState => prevState.filter(link => link !== deleted));
  }
  
  function handleAddTag() {
    setTags(prevState => [...prevState, newTag]);
    setNewTag("");
  }

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted));
  }

  async function handleNewNote() {
    if (!title || !description) {
      return alert("All fields are required !");
    }

    if (newLink || newTag) {
      return alert("Don't forget to add the information on the fields !");
    }

    await api.post("/notes", { title, description, tags, links });

    alert("The note was created successfully !");
    navigate(-1);
  }

  return (
    <Container>
      <Header />
      <main>
        <Form >
          <header>
            <h1>Criar Nota</h1>
            <ButtonText
              title="Voltar" 
              onClick={handleBack}
            />
          </header>
          <Input 
            placeholder="Título"
            onChange={e => setTitle(e.target.value)}
            />
          <Textarea 
            placeholder="Observações"
            onChange={e => setDescription(e.target.value)}
            />

          <Section title="Links Úteis">
            {
              links.map((link, index) => {
                return (
                  <NoteItem 
                    key={String(index)}
                    value={link}
                    onClick={() => handleRemoveLink(link)}
                  />
                )
              })
            }
            <NoteItem 
              isNew
              value={newLink}
              placeholder="Novo Link"
              onChange={e => setNewLink(e.target.value)}
              onClick={handleAddLink}
            />
          </Section>

          <Section title="Marcadores">
            <div className="tags">
              {
                tags.map((tag, index) => {
                  return (
                    <NoteItem 
                      value={tag}
                      key={String(index)}
                      onClick={() => handleRemoveTag(tag)}
                    />
                  )
                })
              }
              
              <NoteItem 
                isNew
                value={newTag}
                placeholder="Nova Tag" 
                onChange={e => setNewTag(e.target.value)}
                onClick={() => handleAddTag()}
              />
            </div>
          </Section>

          <Button title="Salvar" onClick={handleNewNote}/>
        </Form> 
      </main>
    </Container>
  )
}