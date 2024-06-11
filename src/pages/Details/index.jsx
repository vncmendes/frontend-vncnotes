import { Links, Container, Content } from "./styles";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Section } from "../../components/Section";
import { Tags } from "../../components/Tags";
import { ButtonText } from "../../components/ButtonText";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

export function Details() {
  const [data, setData] = useState(null);

  const params = useParams();
  
  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/?id=${params.id}`);
      console.log(response);
      setData(response.data);
    }

    fetchNote();
  }, []);


  console.log(data);

  return (
    <Container>
      <Header/>

      <main>
        <Content>

          <ButtonText title="Excluir Nota"/>

          <h1>Introdução ao React</h1>

          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore natus ipsam voluptates est, at laboriosam nulla molestiae dolorem reprehenderit ad obcaecati et sit! Quia dignissimos ea neque atque reprehenderit rerum.</p>

          <Section title="Links Úteis">
            <Links>
              <li> <a href="#">link </a> </li>
              <li> <a href="#">link2 </a> </li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tags title="express"/>
            <Tags title="nodejs"/>
          </Section>

          <Button title="Voltar"/>
        </Content>
      </main>

    </Container>
  )
}