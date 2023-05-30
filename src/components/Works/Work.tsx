import { Container, Content, Flex } from "./WorkStyles";
import TitleSection from "../Ui/TitleSection";
import WorkBlock from "./components/WorkBlock";
import Project1Image from "../../assets/images/projeto1.png";
import Project2Image from "../../assets/images/projeto2.png";

function Work() {
  const works = [
    {
      title: "Brewstone",
      backgroundImage: Project1Image,
      techs: [
        {
          image:
            "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/html5/html5-original.svg",
          name: "HTML5",
        },
        {
          image:
            "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/css3/css3-original.svg",
          name: "CSS3",
        },
      ],
      description: "Teste",
      gitUrl: "https://www.canva.com/design/DAEuQG4BaYE/Sw38SeNlyRJudmwutNciNg/edit",
    },
    {
      title: "Dtruck",
      backgroundImage: Project2Image,
      techs: [
        {
          image:
            "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/html5/html5-original.svg",
          name: "HTML5",
        },
        {
          image:
            "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/css3/css3-original.svg",
          name: "CSS3",
        },
      ],
    },
  ];

  return (
    <>
      <Container>
        <Content>
          <TitleSection position={"center"} title={"My Works"} />
          <Flex>
            {works.map((work, index) => {
              return (
                <WorkBlock
                      key={index}
                      title={work.title}
                      urlImg={work.backgroundImage}
                      techs={work.techs}
                      description={work.description || ""} gitUrl={work.gitUrl || ""} />
              );
            })}
          </Flex>
        </Content>
      </Container>
    </>
  );
}

export default Work;
