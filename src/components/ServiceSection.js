import React from 'react';
import { MdCode, MdDesktopMac, MdAlbum } from 'react-icons/md';
import styled from 'styled-components';
import SectionTittle from './SectionTittle';
import ServicesSectionItem from './ServicesSectionItem';

const ServicesItemsStyles = styled.div`
  padding: 10rem 0;
  .services__allitems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allitems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServiceSection() {
  return (
    <ServicesItemsStyles>
      <div className="container">
        <SectionTittle heading="Services" subheading="what i will do for you" />
        <div className="services__allitems">
          <ServicesSectionItem
            icon={<MdDesktopMac />}
            title="Website Design"
            desc="I build modern responsive Web Pages with a unique look. "
          />
          <ServicesSectionItem
            icon={<MdCode />}
            title="Web Development"
            desc="High-performance website development, tailored to your business needs. "
          />
          <ServicesSectionItem
            icon={<MdAlbum />}
            title="BeatMaking - Mixing - Mastering"
            desc="I have a large list of beats from all over the musical spectrum. "
          />
        </div>
      </div>
    </ServicesItemsStyles>
  );
}
