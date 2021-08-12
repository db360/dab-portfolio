import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';
import Ptext from './Ptext';

const ContactBannerStyles = styled.div`
  padding: 10rem 0;
  .contactbanner__wrapper {
    background-color: var(--deep-dark);
    border-radius: 12px;
    padding: 5rem 0rem;
    text-align: center;
  }
  .contactbanner__heading {
    font-size: 4rem;
    margin-bottom: 2rem;
  }
  @media only screen and (max-width: 768px) {
    .contactbanner__heading {
      font-size: 2.8rem;
    }
  }
`;

export default function ContactBanner() {
  return (
    <ContactBannerStyles>
      <div className="container">
        <div className="contactbanner__wrapper">
          <Ptext>Do you have a project in mind?</Ptext>
          <h3 className="contactbanner__heading">Let me help you</h3>
          <Button btnText="Contact Now" btnLink="/contact" />
        </div>
      </div>
    </ContactBannerStyles>
  );
}
