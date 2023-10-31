import styled from "styled-components";
export const Button = styled.div`

	background-color:${({theme})=>theme.colors.btn};
	border-radius:20px;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	padding:1rem 1rem;
	text-decoration:none;

`;
