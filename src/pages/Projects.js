import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';
import SectionTittle from '../components/SectionTittle';
import ProjectItem from '../components/ProjectItem';
import projects from '../assets/data/projects';

const ProjectsStyles = styled.div`
  padding: 10rem 0;
  .projects__allitems {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 5rem;
    margin-top: 5rem;
  }
  .projects__searchbar {
    position: relative;
    width: 300px;
    margin-top: 5rem;
  }
  .projects__searchbar input {
    width: 100%;
    font-size: 2rem;
    padding: 0.8rem;
    color: var(--black);
    border-radius: 6px;
    outline: none;
    border: none;
  }
  .projects__searchbar .searchicon {
    position: absolute;
    width: 2rem;
    right: 1rem;
  }
  .projects__searchbar .searchicon path {
    color: var(--deep-dark);
  }
  @media only screen and (max-width: 768px) {
    .projects__searchbar,
    .projects__searchbar form,
    .projects__searchbar input {
      width: 100%;
    }
  }
`;

export default function Projects() {
  const [searchText, setSearchText] = useState('');
  const [projectData, setProjectData] = useState(projects);

  useEffect(() => {
    if (searchText === '') return;
    setProjectData(() =>
      projects.filter((item) =>
        item.name.toLowerCase().match(searchText.toLowerCase())
      )
    );
  }, [searchText]);

  function handleChange(e) {
    e.preventDefault();
    setSearchText(e.target.value);
    if (!e.target.value.length > 0) {
      setProjectData(projects);
    }
  }

  return (
    <>
      <ProjectsStyles>
        <div className="container">
          <SectionTittle heading="Projects" subheading="Some of my projects" />
          <div className="projects__searchbar">
            <form>
              <input
                type="text"
                value={searchText}
                onChange={handleChange}
                placeholder="Project Name"
              />
              <MdSearch className="searchicon" />
            </form>
          </div>
          <div className="projects__allitems">
            {projectData.map((item) => (
              <ProjectItem
                key={item.id}
                title={item.name}
                desc={item.desc}
                img={item.img}
                url={item.url}
              />
            ))}
          </div>
        </div>
      </ProjectsStyles>
    </>
  );
}
