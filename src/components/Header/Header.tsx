import Image from "next/image";
import { Container, Content, MenuOptions } from "./HeaderStyles";

type HeaderProps = {
    title: string;
}

function Header({title}: HeaderProps) {

    return <>
          <Container>
            <Content>
                <div>
                    <a href="">
                        <Image src="/vercel.svg" alt="" width={100} height={50} />
                    </a>
                </div>
                <div>
                    <nav>
                        <MenuOptions href="">HOME</MenuOptions>
                        <MenuOptions href="">ABOUT</MenuOptions>
                        <MenuOptions href="">SKILLS</MenuOptions>
                        <MenuOptions href="">WORK</MenuOptions>
                        <MenuOptions href="">CONTACT</MenuOptions>
                    </nav>
                    <a href="">
                        <img src="" alt="git" />
                    </a>
                    <button>Contact Me</button>
                </div>
            </Content>
          </Container>
    </>
  }
  
  export default Header;