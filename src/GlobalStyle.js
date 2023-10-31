import {createGlobalStyle} from  "styled-components";
export const GlobalStyle = createGlobalStyle`
 *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Work Sans", sans-serif;
 }
 a{
    text-decoration:none;
 }
 li{
    list-style:none;
 }
 h1{
     font-size:9rem;
     font-weight:900;
 }
 h2{
    fonst-size:4.4rem;
    font-weight:500;
 }
 h3{
    font-size:1.8rem;
    font-weight:200;
 }
 input[type=text], select {
   width: 100%;
   padding: 12px 20px;
   margin: 8px 0;
   display: inline-block;
   border: 1px solid #ccc;
   border-radius: 4px;
   box-sizing: border-box;
 }
 input[type=email], select {
   width: 100%;
   padding: 12px 20px;
   margin: 8px 0;
   display: inline-block;
   border: 1px solid #ccc;
   border-radius: 4px;
   box-sizing: border-box;
 }
 button{
   text-decoration:none;
 }
`;
