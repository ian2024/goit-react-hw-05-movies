import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 28px;`

export const Backdrop = styled.img`
width: 1280px;
height: 414px;
opacity: 12%;
position: relative;`

export const Title = styled.h2`
color: white;
display: flex;
justify-content: center;
align-items: center;
font-size: 32px;
font-weight: 700;`

export const Text = styled.p`
color: white;`

export const Subtitle = styled.h3`
color: white;
font-weight: 480;
font-size: 24px;
color: rgb(5,101,178);
text-align: center;`

export const Image = styled.img`
position: absolute;
left: 0;`

export const Comp = styled.ul`
display: flex;
justify-content: center;
gap: 32px;
margin-top: 15px;
margin-bottom: 22px;`

export const Item = styled.li`
display: flex;
align-items: center;`

export const ImageComp = styled.img`
display: flex;`


export const Block = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
padding-bottom: 8px;
margin-top: 15px;
gap: 15px;`