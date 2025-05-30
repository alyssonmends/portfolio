import styled from "styled-components";

type HeaderProps = {
  link: string;
  srcImg: string;
  iconTitle: string;
  contactvalue: string;
};

function FooterContact({
  link,
  srcImg,
  iconTitle,
  contactvalue
}: HeaderProps) {
  return (
    <>
      <ContactLink href={link} target="_blank">
        <ContactIcon>
          <Icon src={srcImg} alt={iconTitle} width={30} height={30} />
        </ContactIcon>
        <ContactBlock>
          <ContactTitle>{iconTitle}</ContactTitle>
          <ContactValue>{contactvalue}</ContactValue>
        </ContactBlock>
      </ContactLink>
    </>
  );
}

export default FooterContact;

const ContactLink = styled.a`
  width: 290px;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  -webkit-transition: 0.6s;
  -o-transition: 0.6s;
  transition: 0.6s;
  &:hover {
    transform: scale(1.1);
  }
`;

const ContactIcon = styled.div`
  background-color: ${({ theme }) => theme.colors.gray};
  // padding: 10px;
  border-radius: 100%;
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  //margin: auto;
`;

const Icon = styled.img`
  margin: auto;
  display: block;
`;

const ContactBlock = styled.div`
  margin: auto;
  margin-left: 20px;
`;

const ContactTitle = styled.h4`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.white}
`;

const ContactValue = styled.h5`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.text2}
`;