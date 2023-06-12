import styled from "styled-components";

export const Logo = styled.img`
    color: ${({theme}) => theme.colors.text1};
`;

export const Image = styled.img`
`;

export const Container = styled.div`
    background-color: ${({theme}) => theme.colors.primary};
    width: 100%;
    padding: 20px 0;
`;

export const Content = styled.div`
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
`;

export const Left = styled.div`
    
`;

export const Right = styled.div`
    margin: auto;
    margin-right: 0;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
`;

export const Nav = styled.nav`
    width: 400px;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
`;

export const MenuOptions = styled.a`
    color: ${({theme}) => theme.colors.white};
    margin: auto;
    &:hover {
        color: ${({theme}) => theme.colors.text1};
    }
`;

export const LinkLogo = styled.a`

`;

export const LinkGit = styled.a`
    display: flex;
    align-items: center;
`;