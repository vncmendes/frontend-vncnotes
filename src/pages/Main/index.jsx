import { Links, MainContainer, Content } from "./styles";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Section } from "../../components/Section";
import { Tags } from "../../components/Tags";
import { ButtonText } from "../../components/ButtonText";


export function Main() {
  return (
    <MainContainer>
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

    </MainContainer>
  )
}