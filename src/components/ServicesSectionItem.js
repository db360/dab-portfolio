import React from 'react';
import { MdDesktopMac } from 'react-icons/md';
import styled from 'styled-components';
import Ptext from './Ptext';

const ItemSyles = styled.div`
  text-align: center;
  .servicesitem__icon {
    svg {
      width: 3rem;
    }
  }
  .servicesitem__title {
    font-size: 2.5rem;
    font-family: 'Monserrat SemiBold';
  }
  .para {
    margin-top: 3rem;
  }
`;

export default function ServicesSectionItem({
  icon = <MdDesktopMac />,
  title = 'Web Design',
  desc = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum fugiat debitis nobis enim nihil quam iste porro.',
}) {
  return (
    <ItemSyles>
      <div className="servicesitem__icon">{icon}</div>
      <div className="servicesitem__title">{title}</div>
      <Ptext>{desc}</Ptext>
    </ItemSyles>
  );
}
