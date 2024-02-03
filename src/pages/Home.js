import React from 'react';
import styled from 'styled-components';


const Section = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 800px;
  margin: auto;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const TextConatiner = styled.div`

`;

const ButtonContainer = styled.ul`
  display: flex;
  list-style-type: none;
  padding: 0;
`;

const Button = styled.a`
  text-decoration: none;
  color: #000;
  padding: 10px 20px;
  margin-right: 10px;
  background-color: #f7d9c6;
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ECB390;
  }
`;

const Image = styled.img`
  width: 100%;
  max-width: 400px;
  padding: 20px;
`;

function Home() {
  return (
    <SectionContainer id="home">
      <Section>
        <TextConatiner>
          <h1>Hello, I'm Christiane!</h1>
          <h3>Junior Frontend Developer with background in healthcare.</h3>
          <p>In the healthcare service, there has been an increased focus on the use of new welfare technology. I have firsthand experience in using new platforms and aids. The significant impact this has had on our daily work routine in a short period has sparked my interest in technology and development in general.</p>
          <p>While working in home care services in Asker, I recently completed my frontend development studies at Noroff. Throughout the program, I gained proficiency in designing, developing, testing, and deploying interactive web solutions using HTML, CSS, JavaScript, React, and other tools. My experience in a dynamic environment has honed my problem-solving and communication skills, and I excel in interdisciplinary collaboration.</p>
        </TextConatiner>
        <ButtonContainer>
          <li><Button href="#projects">Projects</Button></li>
          <li><Button href="#experience">Experience</Button></li>
        </ButtonContainer>
      </Section>
      
      <Image src='/portraitimage.png'></Image>
    </SectionContainer>
  );
}

export default Home;
