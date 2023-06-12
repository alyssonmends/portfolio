import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    margin-top: 20px;
`;

export const Content = styled.div`
    max-width: 1100px;
    margin: 0 auto;
`;

export const Flex = styled.div`
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
`;

export const Contact = styled.div`
    margin: auto;
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
`;

export const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
`;

export const Rights = styled.div`
    margin-top: 50px;
    padding: 20px 0;
    background-color: ${({ theme }) => theme.colors.quaternary};
`;

export const Text = styled.p`
    text-align: center;
    color: ${({ theme }) => theme.colors.white};
`;