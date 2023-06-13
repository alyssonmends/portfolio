import { Container, Content, TextBanner, Text1, Text2, Text3, Follow, LinkMedia, Image } from "./BannerStyles";
import LinkedinImage from "../../assets/images/linkedin.png";
import GitImage from "../../assets/images/git.png";
import EmailImage from "../../assets/images/email.png";
import BannerImage from "../../assets/images/banner13.png";

function Banner() {

    return <>
        <Container>
            <Content>
                <TextBanner>
                    <Text1>Olá! Eu sou</Text1>
                    <Text2>Alysson Mendes</Text2>
                    <Text3>Sou desenvolvedor full-stack em JavaScript, C#, .NET, Android e SQL. Atualmente, estou focado no estudo de React e TypeScript para aprimorar minhas habilidades no desenvolvimento de aplicativos web escaláveis e modernos.</Text3>
                    <Follow>
                        <LinkMedia href="https://www.linkedin.com/in/alysson-mendes/" target="_blank">
                            <Image src={LinkedinImage} alt="linkedin" width={20} height={20}/>
                        </LinkMedia>
                        <LinkMedia href="https://github.com/alyssonmends" target="_blank">
                            <Image src={GitImage} alt="git" width={20} height={20}/>
                        </LinkMedia>
                        <LinkMedia href="mailto:alyssonmeng@gmail.com" target="_blank">
                            <Image src={EmailImage} alt="email" width={20} height={20}/>
                        </LinkMedia>
                    </Follow>
                </TextBanner>
                <Image src={BannerImage} alt="banner" width={500} height={400}/>
            </Content>
        </Container>
        </>
}
  
  export default Banner;