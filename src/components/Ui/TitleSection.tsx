import styled from "styled-components";

function TitleSection({title}: any) {

    return <>
        <Text>{title}</Text>
    </>
}

export default TitleSection;

 
export const Text = styled.div`
    color: ${({theme}) => theme.colors.text1};
    font-size: 20px;
`;