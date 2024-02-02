import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #CEE5D0;
  padding: 20px;
  text-align: center;
`;

function Footer() {
  return (
    <FooterContainer>
      <p>&copy; 2024 Designed and built by DevChristiane</p>
    </FooterContainer>
  );
}

export default Footer;
