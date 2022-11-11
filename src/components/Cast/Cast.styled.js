import styled from 'styled-components';

export const List = styled.ul`
list-style: none;
display: flex;
gap: 15px;
flex-direction: row;
flex-wrap: wrap;
margin-top: 20px;
padding-left: 15px;
`

export const ListItem = styled.li`
  display: flex;
  border: 2px solid #553ba4;
`

export const ListBlock = styled.div`
width: 220px;
`

export const Image = styled.img`
width: 220px;`


export const Title = styled.p`
font-size: 16px;
font-weight: semibold;
color: white;
padding-top: 5px;
text-align: center;`

export const Subtitle = styled.p`
font-size: 14px;
color: white;
padding-top: 10px;
text-align: center;
`