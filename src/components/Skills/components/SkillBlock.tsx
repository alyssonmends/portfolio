import styled from "styled-components";

type HeaderProps = {
    title: string;
    url: string;
}

function SkillBlock({title, url}: HeaderProps) {

    return <>
        <Block>
            <ImageBackground>
                <Image src={url} alt={title} width={50} height={50} />
            </ImageBackground>
            <Text>{title}</Text>
        </Block> 
    </>
}

export default SkillBlock;

export const Block = styled.div`
    background-color: ${({theme}) => theme.colors.secondary};
    padding: 15px 40px 20px;
    border-radius: 20px;
    margin-top: 20px;
`;

export const ImageBackground = styled.div`
    background-color: ${({theme}) => theme.colors.terciary};
    margin: auto;
    padding: 15px;
    border-radius: 100%;
    display: flex;
    align-items: center;
`;

export const Image = styled.img`
    margin: auto;
`;

export const Text = styled.h4`
    color: ${({theme}) => theme.colors.white};
    font-size: 16px;
    margin-top: 15px;
    text-align: center;
`;