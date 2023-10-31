import styled from 'styled-components';
import Container from '../Styles/Container';
import { useState } from 'react';
import {Button} from '../Styles/Button'
// import React,{useState} from 'react';
const Register=(props)=>{
    const [isFarmer,setIsFarmer] = useState(false);
    return(
        <Wrapper>
            
                <div className='form-box'>
                    <div className='register-option-div'>
                        <div className='isFarmer-btn' onClick={()=>{setIsFarmer(true)}}>As a Farmer</div>
                        <div className='isFarmer-btn' onClick={()=>{setIsFarmer(false)}}>As a Customer</div>
                    </div>
                  <form>
                    {isFarmer?<div><p>Farmer Details</p></div>:<div><p>Customer Details</p></div>}
                    <input type='text' placeholder='NAME'></input>
                    <input type='email' placeholder='EMAIL'></input>
                    <input type='text' placeholder='CONTACT'></input>
                    <input type='text' placeholder='LOCALITY'></input>
                    <input type='text' placeholder='CITY'></input>
                    <input type='text' placeholder='STATE'></input>
                    <input type='text' placeholder='PINCODE'></input>
                    {isFarmer && <p>Add Dilevery Pincodes</p>}
                    {isFarmer && <input type='text' placeholder='DELIVERY PINCODE 1'></input>}
                    {isFarmer && <input type='text' placeholder='DELIVERY PINCODE 2'></input>}
                    {isFarmer && <input type='text' placeholder='DELIVERY PINCODE 3'></input>}
                    <div><Button>Submit</Button></div>
                  </form>
                </div>

        </Wrapper>
    );
}
const Wrapper = styled.section`
    .register-option-div{
        display:flex;
        justify-content:space-evenly;
        .isFarmer-btn{
            cursor:pointer;
            padding:1rem 0;
        }
        .isFarmer-btn:hover{
            text-decoration:underline;
        }
    }
`;
export default Register;