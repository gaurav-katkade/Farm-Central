import styled from 'styled-components';
import Container from '../Styles/Container';
import Login from './Login';
import Register from './Register';
import React,{useState} from 'react';
const SignUp=()=>{
    const [isLogin,setLogin] = useState(true);
    return(
        <Wrapper>
            <Container className='signup-main'>
            <div className='signup-box'>
                <div className='signup-option'>
                    <div className='signup-button' onClick={()=>{setLogin(true)}}><p>Login</p></div>
                    <div className='signup-button' onClick={()=>{setLogin(false)}}><p>Register</p></div>
                </div>
                {isLogin?<Login/>:<Register/>}
            </div>
            </Container>
        </Wrapper>
    );
}
const Wrapper = styled.section`
    .signup-main{
        display:flex;
        justify-content:center;
        padding:10rem 0;
    }
    .signup-box{
        background-color:${({theme})=>theme.colors.bg};
        width:20rem;
        .signup-option{
            padding:1rem;
            display:flex;
            justify-content:space-evenly;
        }
    }
    .signup-button{
        cursor:pointer;
    }
    .signup-button:hover{
        text-decoration:underline;
    }
   
`;
export default SignUp;