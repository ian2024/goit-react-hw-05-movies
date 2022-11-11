import { NavLink } from "react-router-dom";
import styled from "styled-components";


export const Button = styled.button`
  padding: 0.6em 2em;
  border: none;
  outline: none;
  color: rgb(255, 255, 255);
  background: #111;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 10px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  margin-left: 32px;
&:before {
  content: "";
  background: linear-gradient(
    45deg,
    #ff0000,
    #ff7300,
    #fffb00,
    #48ff00,
    #00ffd5,
    #002bff,
    #7a00ff,
    #ff00c8,
    #ff0000
  );
  position: absolute;
  top: -2px;
  left: -2px;
  background-size: 400%;
  z-index: -1;
  filter: blur(5px);
  -webkit-filter: blur(5px);
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  animation: glowing-button-85 20s linear infinite;
  transition: opacity 0.3s ease-in-out;
  border-radius: 10px;
}
@keyframes glowing-button-85 {
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 400% 0;
  }
  100% {
    background-position: 0 0;
  }
}
&:after {
  z-index: -1;
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: #222;
  left: 0;
  top: 0;
  border-radius: 10px;
}
`

export const Block = styled.div`
display: flex;
flex-direction: column;
`

export const Title = styled.h2`
color: rgb(5,101,178);
text-align: center;
margin-bottom: 20px;
font-size: 24px;
font-weight: 700;`

export const List = styled.ul`
margin-left: 15px;
display: flex;
flex-direction: row;
gap: 10px;
`

export const Item = styled.li`
display: flex;
align-items: center;
justify-content: center;
width: 140px;
height: 40px;
color: white;
border: 2px solid black;
&:hover {
  border-color: red;
}
`

export const NavItem = styled(NavLink)`
color: white;
font-size: 14px;
font-weight: 480;
text-align: center;
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
`

export const Section = styled.div`
margin-bottom: 80px;`