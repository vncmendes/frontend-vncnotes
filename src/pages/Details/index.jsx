import { Links, Container, Content } from "./styles";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Section } from "../../components/Section";
import { Tags } from "../../components/Tags";
import { ButtonText } from "../../components/ButtonText";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

export function Details() {
  const [data, setData] = useState(null);

  const params = useParams();
  const id = params.id;

  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  async function handleDeleteNote() {
    const willBeDeleted = window.confirm("Do you really want to delete this note?");
    if (willBeDeleted) {
      await api.delete(`/notes/${id}`);
      navigate(-1);
    }
    else {
      return
    }
  }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/?id=${id}`);

      setData(response.data[0]);
    }

    fetchNote();
  }, []);

  return (
    <Container>
      <Header/>
      { data &&
        <main>
          <Content>

            <ButtonText title="Excluir Nota" onClick={handleDeleteNote}/>

            <h1>{data.title}</h1>

            <p>{data.description}</p>

            { data.links &&
                <Section title="Links Úteis">
                  <Links>
                  { data.links.map(link => (
                      <li key={link.id}> 
                        <a href={link.url} target="_blank"> {link.url} </a> 
                      </li>
                  ))
                  }
                  </Links>
                </Section>
            }
            { data.tags &&
                <Section title="Marcadores">
                  { data.tags.map(tag => (
                    <Tags 
                      key={tag.id}
                      title={tag.name}
                    />
                  ))
                  }
                </Section>
            }

            <Button 
              title="Voltar" 
              onClick={handleBack}
            />

          </Content>
        </main>
      }

    </Container>
  )
}