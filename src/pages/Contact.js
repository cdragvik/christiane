import React from 'react';
import styled from 'styled-components';
import ContactForm from '../components/ContactForm';
import { FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';



const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #f9f1e4b8;
  align-items: center;
`;

const Section = styled.div`
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

const ContactInfo = styled.div`
`;

const ContactDetails = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ContactDetailItem = styled.li`
  margin-bottom: 10px;
`;
const Icon = styled.span`
  margin-right: 5px;
`;

function Contact() {
  return (
    <SectionContainer id="contact">
      <h1>Get in touch</h1>
      <p>Your thoughts and feedback matter! Whether you have a question, suggestion, or just want to connect, I'm all ears. Drop me a line and let's start a conversation!</p>
      <Section>

        <ContactInfo>
          <h2>Conatct Details:</h2>
          <ContactDetails>
            <ContactDetailItem>
              <Icon><FaLinkedin/></Icon>
              LinkedIn: <a href="https://www.linkedin.com/in/christiane-nanette-dragvik/">Christiane Nanette Dragvik</a>
            </ContactDetailItem>
            <ContactDetailItem>
            <Icon><FaEnvelope/></Icon>
              Email: cndragvik@gmail.com
            </ContactDetailItem>
            <ContactDetailItem>
            <Icon><FaPhone/></Icon>
              Phone: +47 968 29 487
            </ContactDetailItem>
          </ContactDetails>
        </ContactInfo>

        <ContactForm />

      </Section>
    </SectionContainer>
  );
}

export default Contact;
