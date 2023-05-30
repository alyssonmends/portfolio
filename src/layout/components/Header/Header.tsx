import { Container, Content, Left, LinkLogo, Logo, Right, Nav, MenuOptions, LinkGit, Image } from "./HeaderStyles";
import GitImage from "../../assets/images/git.png";

type HeaderProps = {
    title: string;
}

function Header({title}: HeaderProps) {

    return <>
          <Container>
            <Content>
                <Left>
                    <LinkLogo href="">
                        <Logo>Alysson Mendes</Logo>
                    </LinkLogo>
                </Left>
                <Right>
                    <Nav>
                        <MenuOptions href="">HOME</MenuOptions>
                        <MenuOptions href="">ABOUT</MenuOptions>
                        <MenuOptions href="">SKILLS</MenuOptions>
                        <MenuOptions href="">WORK</MenuOptions>
                        <MenuOptions href="">CONTACT</MenuOptions>
                    </Nav>
                    <LinkGit href="">
                        {/* <Image src={GitImage} alt="git" width={20} height={20}/> */}
                    </LinkGit>
                </Right>
            </Content>
          </Container>
    </>
  }
  
  export default Header;