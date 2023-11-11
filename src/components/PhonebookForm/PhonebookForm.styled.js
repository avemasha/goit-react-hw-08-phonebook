import styled from 'styled-components';

import { Form, Field, ErrorMessage } from 'formik';

export const ErMessage = styled(ErrorMessage)`
  font-size: 15px;
  font-weight: bold;
  color: rgb(201, 49, 42);
`;

export const Input = styled(Field)`
margin-top: 5px;
    padding: 3px 6px;
   border: 1px solid blue;
   border-radius: 5px;

`
export const Label = styled.label`
display: flex;
flex-direction: column;
 margin-top: 10px;


 &:not(:last-of-type){
    margin-bottom: 10px;
 }
`

export const Forma = styled(Form)`
border: 3px solid #161373;
   width: 300px;
   border-radius: 5px;
    padding: 15px 15px 15px 15px;
    display: flex;
    flex-direction:column;
    // align-items:center;
`

export const Button = styled.button`
background-color: blue;
  border-color: navy;
   border: 50;
 color: white;
 text-transform:uppercase;
 padding: 2px 2px 2px 2px;
 margin-top: 10px;
 border-radius: 5px;
`
export const Title = styled.h1`
  margin: 0px;
  font-size: 35px;
  font-weight: bold;
  text-transform: uppercase;
  color: blue;
  text-align: center;
  
  // text-decoration: underline;
  `