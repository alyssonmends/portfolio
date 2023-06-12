import { Container, Content, Flex, Contact, Form, Rights, Text } from "./FooterStyles";
import SectionTitle from "../../../components/Ui/SectionTitle";
import iconTel from "../../../assets/images/iconTel.png";
import iconEmail from "../../../assets/images/iconEmail.png";
import iconLinkedin from "../../../assets/images/iconLinkedin.png";
import iconGit from "../../../assets/images/iconGit.png";
import iconAddress from "../../../assets/images/iconAddress.png";
import FooterContact from "./components/FooterContact";

function Footer() {
  const footer = [
    {
      link: "",
      src: iconTel,
      icon: "Telefone",
      value: "(85) 99793-9177",
    },
    {
      link: "",
      src: iconEmail,
      icon: "Email",
      value: "alysson@alysson.dev.br",
    },
    {
      link: "",
      src: iconLinkedin,
      icon: "Linkedin",
      value: "@alysson-mendes",
    },
    {
      link: "",
      src: iconGit,
      icon: "Git",
      value: "@alyssonmends",
    },
    {
      link: "",
      src: iconAddress,
      icon: "Endereço",
      value: "Fortaleza, CE",
    }
  ];

  return (
    <>
      <Container id="contact">
        <Content>
          <SectionTitle position={"center"} title={"Contatos"} />
          <Flex>
            <Contact>
              {footer.map((footer, index) => {
                return (
                  <FooterContact
                    key={index}
                    link={footer.link}
                    srcImg={footer.src}
                    iconTitle={footer.icon}
                    contactvalue={footer.value}
                  />
                );
              })}
            </Contact>
            <Form>

            </Form>
          </Flex>
        </Content>
        <Rights>
            <Text>© 2023 Todos os direitos reservados | Alysson Mendes</Text>
        </Rights>
      </Container>
    </>
  );
}

export default Footer;
