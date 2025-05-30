import styled from "styled-components";

export const Container = styled.div`
    background: linear-gradient(to bottom right, #12053a 0%, #141844 35%, #340a3a 100%);
    width: 100%;
    padding: 40px 0;
`;

export const Content = styled.div`
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
`;

export const Image = styled.img`

`;

export const TextBanner = styled.div`
    max-width: 500px;
    margin-top: 20px;
`;

export const Text1 = styled.p`
    color: ${({theme}) => theme.colors.white};
    font-size: 24px;
`;

export const Text2 = styled.h2`
    background-image: linear-gradient(to right, #db4d65 0%, #bb5fcc 30%, #24add9 60%);
    color: black;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 30px;
`;

export const Text3 = styled.p`
    color: ${({theme}) => theme.colors.text2};
    font-size: 14px;
    margin-top: 20px;
`;

export const Follow = styled.div`
    max-width: 150px;
    margin-top: 50px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
`;

export const LinkMedia = styled.a`
    padding: 8px;
    border: 1px solid #ffff;
    border-radius: 100%;
    display: flex;
`;