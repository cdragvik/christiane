import React, { useState } from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  background-color: #CEE5D0;
  padding: 20px 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
`;

const Logo = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const Navigation = styled.nav`
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
  }

  li {
    margin: 0 20px;
  }

  a {
    text-decoration: none;
    color: black;
    transition: color 0.3s ease;

    &:hover {
      color: #555555;
    }
  }

  @media (max-width: 768px) {
    display: ${({ open }) => (open ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 50px;
    right: 0;
    background-color: #CEE5D0;
    width: 100%;
    padding: 20px;
    z-index: 999; 
    
    ul{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    li{
        margin: 20px 0;
    }
  }
`;

const HamburgerMenu = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
    z-index: 1100;
  }
`;

const Line = styled.div`
  width: 25px;
  height: 3px;
  background-color: black;
  margin: 5px 0;
  transition: transform 0.3s ease-in-out;

  &:first-child {
    transform: ${({ open }) => (open ? 'rotate(45deg)' : 'none')};
    transform-origin: top left;
  }

  &:nth-child(2) {
    opacity: ${({ open }) => (open ? '0' : '1')};
  }

  &:last-child {
    transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'none')};
    transform-origin: bottom left;
  }
`;

function Header() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <HeaderContainer>
      <Logo>DevChristiane</Logo>
      <Navigation open={open}>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </Navigation>
      <HamburgerMenu onClick={toggleMenu}>
        <Line open={open} />
        <Line open={open} />
        <Line open={open} />
      </HamburgerMenu>
    </HeaderContainer>
  );
}

export default Header;
