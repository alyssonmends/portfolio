import { Container, Content, Flex } from "./SkillStyles";
import SectionTitle from "../Ui/SectionTitle";
import SkillBlock from "./components/SkillBlock"
import Project1Image from "../../assets/images/logo-scrum.png";

function Skill() {

    const skills = [
        {
            title: "HTML5",
            url: "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/html5/html5-original.svg"
        },
        {
            title: "CSS3",
            url: "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/css3/css3-original.svg"
        },
        {
            title: "JavaScript",
            url: "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/javascript/javascript-original.svg"
        },
        {
            title: "React",
            url: "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/react/react-original.svg"
        },
        {
            title: "TypeScript",
            url: "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/typescript/typescript-original.svg"
        },
        {
            title: "SQL",
            url: ""
        },
        {
            title: "C#",
            url: "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/csharp/csharp-original.svg"
        },
        {
            title: ".NET",
            url: "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/dotnetcore/dotnetcore-original.svg"
        },
        {
            title: "Android",
            url: "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/android/android-plain.svg"
        },
        {
            title: "C++",
            url: "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/cplusplus/cplusplus-original.svg"
        },
        {
            title: "Git",
            url: "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/git/git-original.svg"
        },
        {
            title: "Scrum",
            url: Project1Image
        },
    ]

    return <>
        <Container>
            <Content id="skill">
                <SectionTitle position={"center"} title={"Skills"} />
                <Flex>
                    {skills.map((skill, index) => {
                        return <SkillBlock key={index} title={skill.title} url={skill.url} />
                    })}
                </Flex>
            </Content>
        </Container>
    </>
}

export default Skill;