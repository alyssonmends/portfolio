import { Container, Content, TextBanner, Text, Image } from "./AboutStyles";
import SectionTitle from "../Ui/SectionTitle";
import BannerImage from "../../assets/images/banner8.png";

function About() {

    return <>
        <Container id="about">
            <Content>
                <TextBanner>
                    <SectionTitle position={"left"} title={"Sobre mim"} />
                    <Text>Sou graduado em Análise e Desenvolvimento de Sistemas, tenho 29 anos e atuo como desenvolvedor full-stack, com experiência há mais de 3 anos, com uma ampla gama de tecnologias, incluindo .NET, C#, React, HTML, CSS, SQL e AWS.
                        <br />
                        <br />
                        Ao longo da minha carreira, adquiri valiosas experiências e conhecimentos nas empresas em que trabalhei. Desenvolvi, mantive e otimizei sites, realizei manutenção em sistemas e prestei suporte aos chamados das áreas de negócio. Também tive a oportunidade de aprender e aplicar as melhores práticas de programação e gerenciamento de projetos.
                        <br />
                        <br />
                        Tenho um bom relacionamento em equipe e estou sempre em busca de desafios que me proporcionem crescimento pessoal e contribuição para o time. Além do meu entusiasmo pela programação, gosto de conhecer novos lugares, aproveitar momentos em família e com amigos, e viajar pelo litoral.
                    </Text>
                </TextBanner>
                <Image src={BannerImage} alt="banner" width={500} height={500} />
            </Content>
        </Container>
    </>
}

export default About;