import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  width: 60%;
  max-width: 600px;

`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #f7d9c6;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ECB390;
  }
`;

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

     // Validate form data
     if (!formData.name || !formData.email || !formData.message) {
        alert('Please fill in all fields.');
        return;
      }
  
      // Construct mailto link
      const subject = 'Contact Form';
      const body = `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`;
      const mailtoLink = `mailto:cndragvik@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  
      // Open default email client with pre-filled email
      window.location.href = mailtoLink;
  
      // Clear form data after submission
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="name">Name:</Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="email">Email:</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="message">Message:</Label>
          <TextArea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></TextArea>
        </FormGroup>

        <SubmitButton type="submit">Send</SubmitButton>
      </form>
    </FormContainer>
  );
}

export default ContactForm;
