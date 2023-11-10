import styled from 'styled-components';

export const Email = styled.p`
font-size: 25px;
  font-weight: bold;
  color: rgb#5968c7;
  margin: 0;
  margin-left: auto;
  margin-right: 30px;
`;


export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 40px;
  text-transform: uppercase;
  font-size: 15px;
  font-weight: bold;
  background-color: transparent;
  color: #135600;
  border: 3px solid #135600;
  border-radius: 5px;
  max-height: 50px;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: rgb(204, 207, 44);
  }
`;

export const Box = styled.header`
  display: flex;
  align-items: center;
  padding: 20px 0;
  /* margin-bottom: 50px; */
  border-bottom: 1px solid rgb(152, 154, 27);
`;