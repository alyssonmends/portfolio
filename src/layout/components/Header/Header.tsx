import { Container, Content, Left, LinkLogo, Logo, Right, Nav, MenuOptions, LinkGit, Image } from "./HeaderStyles";
import GitImage from "../../../assets/images/wpp.png";
import LogoImage from "../../../assets/images/logo.png";

type HeaderProps = {
    title: string;
}

function Header({title}: HeaderProps) {

    return <>
          <Container>
            <Content>
                <Left>
                    <LinkLogo href="">
                        <Logo src={LogoImage} alt="logo" width={300} height={35} />
                    </LinkLogo>
                </Left>
                <Right>
                    <Nav>
                        <MenuOptions href="#">HOME</MenuOptions>
                        <MenuOptions href="#about">SOBRE</MenuOptions>
                        <MenuOptions href="#skill">SKILLS</MenuOptions>
                        <MenuOptions href="#work">PROJETOS</MenuOptions>
                        <MenuOptions href="#contact">CONTATO</MenuOptions>
                    </Nav>
                    <LinkGit href="https://api.whatsapp.com/send?phone=5585997939177" target="_blank">
                        <Image src={GitImage} alt="git" width={20} height={20} />
                    </LinkGit>
                </Right>
            </Content>
          </Container>
    </>
  }
  
  export default Header;