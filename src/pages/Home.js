import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  display: flex;
  flex-wrap: wrap; /* Allow content to wrap */
  max-width: 800px;
  margin: auto;
  padding: 20px;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  padding: 20px;
  margin-bottom: 20px; /* Add margin between content and image */
`;

const ButtonContainer = styled.ul`
  display: flex;
  list-style-type: none;
`;

export const Button = styled.a`
  background-color: #f7d9c6;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 8px;
  margin-left: 10px;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 400px;
  width: auto;
  height: auto;
`;

function Home() {
  return (
    <Section id="home">
      <Content>
        <h1>Hello, I'm Christiane!</h1>
        <p>Junior Frontend Developer.</p>
        <p>Welcome to my portfolio.</p>
        <ButtonContainer>
          <li><Button href="#projects">Projects</Button></li>
          <li><Button href="#experience">Experience</Button></li>
        </ButtonContainer>
      </Content>
      <Image src='/portrait.png'></Image>
    </Section>
  );
}

export default Home;
