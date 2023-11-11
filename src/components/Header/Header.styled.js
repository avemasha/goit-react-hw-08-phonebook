import styled from 'styled-components';
import { NavLink } from 'react-router-dom';



export const NavigationLink = styled(NavLink)`
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
  /* opacity: 0.5; */
  &:hover,
  &:focus {
    background-color: blue;
    color: white;
  }
  &:not(:last-child) {
    margin-left: auto;
    margin-right: 40px;
  }

  &.active {
    pointer-events: none;
    /* opacity: 1; */
    background-color: blue;
    color: white;
  }
`;