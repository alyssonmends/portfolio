import Image from "next/image";
import { Container, Content, TextBanner, Text1, Text2, Text3 } from "./AboutStyles";
import TitleSection from "../Ui/TitleSection";

function About() {

    return <>
        <Container>
            <Content>
                <TextBanner>
                    <TitleSection title={"Sobre mim"} />
                    {/* <Text2>Alysson Mendes</Text2> */}
                    <Text3>Tenho 27 anos e sou desenvolvedor full-stack, com experiência em JavaScript, C#, .NET, Android e SQL. Atualmente, estou me dedicando ao estudo de aplicativos web modernos e escaláveis, em React e TypeScript.
                        <br />
                        <br />
                        Ao longo da minha carreira, adquiri valiosas experiências e conhecimentos nas empresas em que trabalhei. Desenvolvi, mantive e otimizei sites, realizei manutenção em sistemas e prestei suporte aos chamados das áreas de negócio. Também tive a oportunidade de aprender e aplicar as melhores práticas de programação e gerenciamento de projetos.
                        <br />
                        <br />
                        Tenho um bom relacionamento em equipe e estou sempre em busca de desafios que me proporcionem crescimento pessoal e contribuição para o time. Além do meu entusiasmo pela programação, gosto de conhecer novos lugares, aproveitar momentos em família e com amigos, e viajar pelo litoral.
                    </Text3>
                </TextBanner>
                <Image src="/banner8.png" alt="banner" width={500} height={500} />
            </Content>
        </Container>
    </>
}

export default About;