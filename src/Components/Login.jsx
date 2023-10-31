import styled from 'styled-components';
import Container from '../Styles/Container';
const Login=()=>{
    return(
        <Wrapper>
            
                <div className='form-box'>
                    <form>
                        <input type="text" placeholder='Email'/>
                        <input type="text" placeholder='Password'/>
                    </form>
                </div>

        </Wrapper>
    );
}
const Wrapper = styled.section`
    
`;
export default Login;