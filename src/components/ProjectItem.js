import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import projectImg from '../assets/images/projectImg.png';

const ProjectItemStyle = styled.div`
  .projectitem__img {
    width: 100%;
    height: 400px;
    overflow: hidden;
    border-radius: 12px;
    display: inline-block;
    border: 3px solid var(--gray-2);
    img {
      height: 100%;
    }
  }
  .projectitem__info {
    margin-top: 1rem;
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 12px;
  }
  .projectitem__title {
    font-size: 2.2.rem;
  }
  .projectitem__desc {
    font-size: 1.6rem;
    font-family: 'RobotoMono Regular';
    margin-top: 1rem;
  }
  @media only screen and (max-width: 768px) {
    .projectitem__img {
      height: 350px;
    }
  }
`;

export default function ProjectItem({
  img = projectImg,
  title = 'Project Name',
  desc = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis, dignissimos!',
}) {
  return (
    <ProjectItemStyle>
      <Link to="/projects" className="projectitem__img">
        <img src={img} alt="imagen proyecto 1" />
      </Link>
      <div className="projectitem__info">
        <Link to="#">
          <h3 className="projectitem__title">{title}</h3>
        </Link>
        <p className="projectitem__desc">{desc}</p>
      </div>
    </ProjectItemStyle>
  );
}
