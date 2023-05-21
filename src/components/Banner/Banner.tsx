import Image from "next/image";
import { Container, Content, TextBanner, Text1, Text2, Text3, Follow, LinkMedia } from "./BannerStyles";

function Banner() {

    return <>
        <Container>
            <Content>
                <TextBanner>
                    <Text1>Hey! I Am</Text1>
                    <Text2>Alysson Mendes</Text2>
                    <Text3>Sou desenvolvedor full-stack em JavaScript, C#, .NET, Android e SQL. Atualmente, estou focado no estudo de React e TypeScript para aprimorar minhas habilidades no desenvolvimento de aplicativos web escaláveis e modernos.</Text3>
                    <Follow>
                        <LinkMedia href="">
                            <Image src="/linkedin.png" alt="linkedin" width={20} height={20}/>
                        </LinkMedia>
                        <LinkMedia href="">
                            <Image src="/git.png" alt="git" width={20} height={20}/>
                        </LinkMedia>
                        <LinkMedia href="">
                            <Image src="/email.png" alt="email" width={20} height={20}/>
                        </LinkMedia>
                    </Follow>
                </TextBanner>
                <Image src="/banner13.png" alt="banner" width={500} height={400}/>
            </Content>
        </Container>
        </>
}
  
  export default Banner;