import styled from 'styled-components';


export const Item = styled.li`
display: flex;
width: 180px;
height: 320px;
  &:hover,
  &:focus {
    transform: scale(1.03);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25), 0 7px 10px rgba(0, 0, 0, 0.15);
  }`

  export const Image = styled.img`
  border-radius: 5px;`

export const Text = styled.p`
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  color: #ffffff;
  padding-top: 10px;
  text-decoration: none;`