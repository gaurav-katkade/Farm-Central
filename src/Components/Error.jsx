import Styled, { styled } from 'styled-components';
import Container from '../Styles/Container';
const Error=()=>{
    return(
        <Wrapper>
            <Container>
            <h1>No ! Such page found</h1>
            </Container>
        </Wrapper>
    );
}
const Wrapper = styled.section`
    
`;
export default Error;
