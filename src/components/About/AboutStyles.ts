import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    padding: 40px 0;
`;

export const Content = styled.div`
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row-reverse;
    justify-content: space-between;
`;

export const Image = styled.img`
`;

export const TextBanner = styled.div`
    max-width: 500px;
    margin-top: 20px;
`;

export const Text = styled.p`
    color: ${({theme}) => theme.colors.white};
    font-size: 14px;
    margin-top: 15px;
    line-height: 23px;
    text-align: justify;
`;