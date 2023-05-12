import styled from "styled-components";

export const Container = styled.div`
    background-color: ${({theme}) => theme.colors.success};
    width: 100%;
`;

export const Content = styled.div`
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
`;

export const MenuOptions = styled.a`

`;