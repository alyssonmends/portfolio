import styled from "styled-components";

function TitleSection({title, position}: any) {

    return <>
        <Text position={position}>{title}</Text>
    </>
}

export default TitleSection;

 
export const Text = styled.h3.attrs((props: {position: string}) => props)`
    color: ${({theme}) => theme.colors.text1};
    font-size: 20px;
    text-align: ${(props) => props.position};
`;