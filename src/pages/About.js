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
                I grew up in a music-loving family, this, together with my
                passion for computers and technology, introduced me to music
                production (Daw's, Synths,Drum Machines, etc). With my first
                salary, I bought my first set of turntables, and since then
                turntablism has been my passion.
                <br /> <br />
                After high school, I graduated as a sound technician at the
                I.E.S. Politécnico Jesús Marín in Málaga. Always driven by my
                passion for music, I have done many different jobs, car
                salesman, receptionist, waiter, cook, transporter, audio-visual
                equipment assembly, sound technician... all of which have been a
                bridge to the creation of my small audio-visual studio.
                <br />
                <br />
                Lately, under lockdown after my last job, I've been studying web
                development, focusing on technologies like HTML, CSS3, SASS,
                JavaScript, MySQL, MongoDb, node.js and React.js. Also the
                different applications of the BlockChain to the audio-visual
                world.
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
              title="Courses"
              items={['Web Development (CSS, HTML, SASS, JS)', 'React.js']}
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
