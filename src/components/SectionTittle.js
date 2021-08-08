import React from 'react';
import styled from 'styled-components';

const SectionTittleStyle = styled.div`
  text-align: center;
  p {
    font-family: 'Roboto Mono';
    font-size: 2rem;
  }
  h2 {
    font-family: 'Monserrat Bold';
    font-size: 6rem;
    margin-top: 0.5rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    p {
      font-size: 1.2rem;
    }
    h2 {
      font-size: 3.6rem;
    }
  }
`;

export default function SectionTittle({
  subheading = 'This is Subheading',
  heading = 'This is Heading',
}) {
  return (
    <SectionTittleStyle className="section__title">
      <p>{subheading}</p>
      <h2>{heading}</h2>
    </SectionTittleStyle>
  );
}
