import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header``;

export const Nav = styled.nav`
display: flex;
flex-direction: row;
flex-wrap: nowrap;
margin-left: 20px;
& > * {
  margin-right: 10px;
}
& > *:first-child {
  margin-right: 22px;}
`;

export const NavItem = styled(NavLink)`
    position: relative;
    display: flex;
    padding: 25px 30px;
    margin: 40px 0;
    color: #ededed;
    text-decoration: none;
    text-transform: uppercase;
    transition: 0.5s;
    letter-spacing: 4px;
    overflow: hidden;
  
    &:hover{
            background: #03e9f4;
    color: #050801;
    box-shadow: 0 0 5px #03e9f4,
                0 0 25px #03e9f4,
                0 0 50px #03e9f4,
                0 0 200px #03e9f4;
     -webkit-box-reflect:below 1px linear-gradient(transparent, #0005);
     border-radius: 15%;
    }
    bottom: 0;
    right: 0;
    width: 220px;
    height: 2px;
    background: linear-gradient(270deg,transparent,#03e9f4);
    animation-delay: 0.50s;
    text-align: center;
    justify-content: center;
    align-items: center;
    border-radius: 15%;
`;