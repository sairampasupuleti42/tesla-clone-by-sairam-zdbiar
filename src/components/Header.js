import React, { useState } from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import { selectMenus } from './../features/car/slices';

import { useSelector } from 'react-redux';
export default function Header() {
  const [sidenavState, setSidenavState] = useState(false);
  //  const navigation = useSelector(selectMenus);
  // console.log(navigation);
  window.onscroll = function () {
    var navbar = document.getElementById('navbar');
    if (window.pageYOffset > 0) {
      navbar.classList.add('sticky');
      tC('.middle__nav > li > a ', 'sticky-a', 'non-sticky-a');

      tC('.middle__nav > li > button > i ', 'non-sticky-a', 'sticky-a');
    } else {
      navbar.classList.remove('sticky');
      tC('.middle__nav > li > a ', 'non-sticky-a', 'sticky-a');
      tC('.middle__nav > li > button > i ', 'sticky-a', 'non-sticky-a');
    }
  };
  function tC(selector, classToAdd, classToRemove) {
    document.querySelectorAll(selector).forEach((e) => {
      if (classToAdd) e.classList.add(classToAdd);
      if (classToRemove) e.classList.remove(classToRemove);
    });
  }
  return (
    <Container id="navbar" className="sticky">
      <Logo href="/">
        <SVGL viewBox="0 0 342 35" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 .1a9.7 9.7 0 007 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 007-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 006-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 00-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 007.1-7H78.3a9.6 9.6 0 007 7zm0 13.8h26a9.6 9.6 0 007.1-7H78.3a9.6 9.6 0 007 7zm0 14.1h26a9.6 9.6 0 007.1-7H78.3a9.6 9.6 0 007 7zM308.5 7h26a9.6 9.6 0 007-7h-40a9.6 9.6 0 007 7z"></path>
        </SVGL>
      </Logo>
      <ModelsNav>
        <ul className="middle__nav">
          <li>
            <a href="#1">Model S</a>
          </li>
          <li>
            <a href="#2">Model 3</a>
          </li>
          <li>
            <a href="#3">Model X</a>
          </li>
          <li>
            <a href="#4">Model Y</a>
          </li>
          <li>
            <a href="#5">Solar Panels</a>
          </li>
          <li>
            <a href="#6">Solar Roofs</a>
          </li>
          <li>
            <a href="#7">Accessories</a>
          </li>
        </ul>
      </ModelsNav>
      <HeaderNav>
        <ul className="middle__nav">
          <li>
            <a href="#">Shop</a>
          </li>
          <li>
            <a href="#">My account</a>
          </li>
          <li>
            <OpenSidenavButtonWrapper>
              <OpenSidenavButton onClick={() => setSidenavState(true)}>
                <i className="fa fa-bars fa-2x" aria-hidden="true"></i>
              </OpenSidenavButton>
            </OpenSidenavButtonWrapper>
          </li>
        </ul>
      </HeaderNav>
      <SideNav show={sidenavState}>
        <CloseButtonWrapper>
          <CloseButton onClick={() => setSidenavState(false)}>
            <i className="fa fa-times fa-2x" aria-hidden="true"></i>
          </CloseButton>
        </CloseButtonWrapper>
        <Fade right>
          <ul>
            <li>
              <a href="#">Existing Inventory</a>
            </li>
            <li>
              <a href="#">Used Inventory</a>
            </li>
            <li>
              <a href="#">Trade-In</a>
            </li>
            <li>
              <a href="#">Test Drive</a>
            </li>
            <li>
              <a href="#">Cybertruck</a>
            </li>
            <li>
              <a href="#">Roadster</a>
            </li>
            <li>
              <a href="#">Semi</a>
            </li>
            <li>
              <a href="#">Charging</a>
            </li>
            <li>
              <a href="#">Powerwall</a>
            </li>
            <li>
              <a href="#">Commercial Energy</a>
            </li>
            <li>
              <a href="#">Utilities</a>
            </li>
            <li>
              <a href="#">Find Us</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
            <li>
              <a href="#">Investor Relations</a>
            </li>
            <li>
              <a href="#">United States</a>
            </li>
          </ul>
        </Fade>
      </SideNav>
    </Container>
  );
}
const Container = styled.div`
  min-height: 50px;
  position: fixed;
  display:flex;
  align-items: center;
  justify-content:space-between;
  padding: 0 20px;
  top:0;
  left:0;
  right:0;
  z-index:11;
  
  transition: background .5s; 
`;
const Logo = styled.a`

`;
const SVGL = styled.svg`
    overflow: hidden;
    text-indent: -9999px;
    display: block;
    block-size: 15px;
    content: "";
`;

const ModelsNav = styled.div`

  ul {
    display:flex;
    flex-direction: row;
    list-style: none;
    align-items:center;
    justify-content:center;
    flex:1;
   li {
      a {
          padding: 0 10px;
        }
    
        @media (max-width:768px) {
          display:none;  
        }
      }
}
`;
const HeaderNav = styled(ModelsNav)`
  display:flex;
  align-items:center;
  justify-content:space-around;
  
  a {
    padding: 0 15px;
  }
  
`;

const SideNav = styled.div`
  background: #ffffff;
  box-shadow:0px 0px 0px 3px #ffffff;
  min-width:280px;
  text-align:start;
  padding:8px 35px;
  position: fixed;
  bottom:0;
  top:0;
  right:0;
  display:flex;
  flex-direction: column;
  z-index:12;

  ul {
    list-style:none;
    li {
      padding:15px 0;
      &:not(:last-child){
        border-bottom: 1px solid var(--theme-color);
      }
      a {
        cursor: pointer;
      }
    }
  }
  transition: 0.2s;
  transform: ${(props) => (props.show ? 'translateX(0)' : 'translateX(100%)')}
  
`;
const CloseButtonWrapper = styled.div`
  display:flex;
  justify-content: flex-end;
  
`;
const CloseButton = styled.button`
  background: none;
  outline: none;
  border: none;
  font-weight: normal;
  cursor:pointer;

`;
const OpenSidenavButtonWrapper = styled(CloseButtonWrapper)`
margin-left: 0;
margin-right:10px;

`;
const OpenSidenavButton = styled(CloseButton)`
width:30px;
`;
