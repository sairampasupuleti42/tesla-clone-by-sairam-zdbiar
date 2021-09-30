import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
export default function Section({
  id,
  title,
  description,
  imageSrc,
  leftButtonText,
  rightButtonText,
}) {
  return (
    <section id={id}>
      <Wrapper backgroundImage={imageSrc}>
        <Fade bottom>
          <TextItem>
            <h1>{title}</h1>
            <p>{description}</p>
          </TextItem>
        </Fade>
        <Buttons>
          <Fade bottom>
            <ButtonGroup>
              <LeftButton>{leftButtonText}</LeftButton>
              {rightButtonText && <RightButton>{rightButtonText}</RightButton>}
            </ButtonGroup>
          </Fade>
          {id === 1 && (
            <DownArrow src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgZmlsbD0ibm9uZSIgaGVpZ2h0PSIyNCIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgdmlld0JveD0iMCAwIDI0IDI0IiB3aWR0aD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBvbHlsaW5lIHBvaW50cz0iNiA5IDEyIDE1IDE4IDkiLz48L3N2Zz4=" />
          )}
        </Buttons>
      </Wrapper>
    </section>
  );
}

const Wrapper = styled.div`
    width:100vw;
    height:100vh;
    background:rgba(23,26,32,0.8); 
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display:flex;
    flex-direction: column;
    justify-content:space-between;
    align-items:center;
    background-image:${(props) =>
      `url(https://lh3.googleusercontent.com/u/0/d/${props?.backgroundImage}=w1920-h929-iv1)`}
   
`;
const TextItem = styled.div`
    padding-top: 15vh;
    text-align:center;
`;
const Buttons = styled.div``;

const ButtonGroup = styled.div`
     display:flex;
     margin-bottom:30px;
     @media (max-width:768px) {
       flex-direction:column;
     }
  
`;
const LeftButton = styled.div`
   background: rgba(23,26,32,0.8);
   height:40px;
   width:256px;
   color:#ffffff;
   display:flex;
   justify-content:center;
   align-items: center;
   border-radius:100px;
   opacity:0.85;
   text-transform: uppercase;
   font-size: 12px;
   cursor: pointer;
   margin:20px;
 
`;
const RightButton = styled(LeftButton)`
background:#ffffff;
opacity:0.65;
color: #000;
`;
const DownArrow = styled.img`
   margin-top:20px;
   height:40px;
   cursor:pointer;
   animation: animateToDown infinite 1.3s;
   overflow-x: hidden;
   color:#ffffff;
`;
