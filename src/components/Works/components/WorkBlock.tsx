import styled from "styled-components";
import { Flex } from "../WorkStyles";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { useState } from "react";

type TechsProps = {
  name: string;
  image: string;
};

type HeaderProps = {
  title: string;
  urlImg: string;
  techs: TechsProps[];
  description: string;
  gitUrl: string;
};

function WorkBlock({ title, urlImg, techs, description, gitUrl }: HeaderProps) {
  console.log("gitUrl", gitUrl);

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const openInNewTab = (url: string) => {
    window.open(url);
  };

  return (
    <>
      <Block onClick={toggle}>
        <Image src={urlImg} alt={title} width={450} height={250} />
        <Hover>
          <Text>{title}</Text>
          <Flex>
            {techs.map((tech, index) => {
              return (
                <Image
                  key={index}
                  src={tech.image}
                  alt={tech.name}
                  width={20}
                  height={20}
                />
              );
            })}
          </Flex>
        </Hover>
      </Block>
      <ModalStyled isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>{title}</ModalHeader>
        <ModalBody>
            {description}
            <ul>
            {
                techs.map((tech) => {
                return <li>{tech.name}</li>
                })
            }
            </ul>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => openInNewTab(gitUrl)}>
            Repositório Git
          </Button>
        </ModalFooter>
      </ModalStyled>
    </>
  );
}

export default WorkBlock;

const ModalStyled = styled(Modal)``;

const Hover = styled.div`
  position: absolute;
  bottom: -300px;
  height: 260px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  z-index: 1;
  padding-bottom: 30px;
  background-color: rgba(0, 0, 0, 0.9);
  -webkit-transition: all, 0.5s;
  -o-transition: all, 0.5s;
  transition: all, 0.5s;
`;

const Block = styled.div`
  position: relative;
  margin-top: 20px;
  cursor: pointer;
  overflow: hidden;
  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 2px;
    width: 100%;
    height: 3px;
    background-image: linear-gradient(90deg, #24add9 0%, #bb5fcc 50%);
  }
  &:hover {
    ${Hover} {
      top: 0;
    }
  }
`;

const Image = styled.img``;

const Text = styled.h4`
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  margin-top: 15px;
  text-align: center;
`;
