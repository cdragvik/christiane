import React from 'react';
import styled from 'styled-components';
import ContactForm from '../components/ContactForm';
import { FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';



const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  margin: auto;
  padding: 20px;
`;

const Section = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

const ContactInfo = styled.div`
  flex: 1;
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
      <h1>Contact Me</h1>
      <Section>
        <ContactInfo>
          <h2>About Me</h2>
          <ContactDetails>
            <ContactDetailItem>
              <Icon><FaLinkedin/></Icon>
              LinkedIn: <a href="your-linkedin-profile">Your LinkedIn Profile</a>
            </ContactDetailItem>
            <ContactDetailItem>
              Email: your-email@example.com
            </ContactDetailItem>
            <ContactDetailItem>
              Phone: +1234567890
            </ContactDetailItem>
          </ContactDetails>
        </ContactInfo>
        <ContactForm />
      </Section>
    </SectionContainer>
  );
}

export default Contact;
