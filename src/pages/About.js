import React from 'react';
import styled from 'styled-components';
import { Button } from '../components/Button';
import Ptext from '../components/Ptext';
import AboutImg from '../assets/images/about-page-img.png';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info-items {
    margin-top: 10rem;
  }
  .about__info-item {
    margin-bottom: 10rem;
  }
  .about__info-heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info-heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <AboutPageStyles>
      <div className="container">
        <div className="top-section">
          <div className="left">
            <p className="about__subheading">
              Hi, I Am <span>David Martínez</span>
            </p>
            <h2 className="about__heading">
              Web Development / Audio-Visual Creator
            </h2>
            <div className="about__info">
              <Ptext>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                hic rem tempora vel aspernatur, odio officia esse optio! Quidem
                praesentium quasi aliquam repellendus vel exercitationem,
                voluptate porro blanditiis in quo!
                <br /> <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique harum porro facilis animi accusantium totam reiciendis
                soluta nam. Nulla laudantium impedit distinctio fugit esse!
                Voluptas.
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                sequi dignissimos accusamus vero ullam reprehenderit perferendis
                est mollitia culpa amet hic voluptatum voluptatem quo,
                laudantium laborum ipsum officiis quam soluta!
              </Ptext>
            </div>
            <Button btnText="Download CV" btnLink="#" />
          </div>
          <div className="right">
            <img src={AboutImg} alt="David Martinez img" />
          </div>
        </div>
        <div className="about__info-items">
          <div className="about__info-item">
            <h1 className="about__info-heading">Education</h1>
            <AboutInfoItem
              title="F.P"
              items={['I.E.S Guadalpin', 'I.E.S Politécnico Jesús Marín']}
            />
            <AboutInfoItem title="School" items={['I.E.S Salduba']} />
            <AboutInfoItem
              title="College"
              items={['I.E.S Salduba. I.E.S Politécnico Jesús Marín']}
            />
          </div>
          <div className="about__info-item">
            <h1 className="about__info-heading">My Skills</h1>
            <AboutInfoItem
              title="FrontEnd"
              items={['HTML', 'CSS', 'Javascript', 'React.js']}
            />
            <AboutInfoItem
              title="Design"
              items={[
                'Adobe After Effects',
                'Adobe Illustrator',
                'Blender 3D',
                'Davinci Resolve',
              ]}
            />
            <AboutInfoItem
              title="Sound"
              items={['Ableton Live', 'BeatMaking', 'Mixing', 'Mastering']}
            />
            <AboutInfoItem title="BackEnd" items={['Node', 'Express', 'PHP']} />
          </div>
          <div className="about__info-item">
            <h1 className="about__info-heading">Education</h1>
            <AboutInfoItem
              title="F.P"
              items={['I.E.S Guadalpin', 'I.E.S Politécnico Jesús Marín']}
            />
            <AboutInfoItem title="School" items={['I.E.S Salduba']} />
          </div>
          <div className="about__info-item">
            <h1 className="about__info-heading">Experiences</h1>
            <AboutInfoItem
              title="2019-Now"
              items={['UTest Tester (Functional Tests, Usability Tests...']}
            />
            <AboutInfoItem
              title="2005-2007"
              items={['Peugeot-Citroen Salesman']}
            />
            <AboutInfoItem title="2007" items={['BMW Workshop Asistant']} />
          </div>
        </div>
      </div>
      <ContactBanner />
    </AboutPageStyles>
  );
}
