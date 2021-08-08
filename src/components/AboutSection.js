import React from 'react';
import styled from 'styled-components';
import SectionTittle from './SectionTittle';
import Ptext from './Ptext';
import { Button } from './Button';
import AboutImg from '../assets/images/about-sec-img.png';

const AboutSectionStyle = styled.div`
  padding: 2rem 0;
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
  }
  .aboutSection__left,
  .aboutSection__right {
    flex: 1;
  }
  .section__title {
    text-align: left;
  }
  .para {
    margin-top: 2rem;
    margin-left: 0;
  }
  .aboutSection__buttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 2rem;
  }
  @media only screen and (max-width: 950px) {
    .aboutSection__left {
      flex: 4;
    }
    .aboutSection__right {
      flex: 3;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      padding-top: 0;
      flex-direction: column;
      text-align: center;
    }
    .aboutSection__left,
    .aboutSection__right {
      width: 100%;
    }
    .aboutSection__right {
      margin-top: 3rem;
    }
    .section__title {
      text-align: center;
    }
    .para {
      margin: 0 auto;
      margin-top: 4rem;
    }
    .aboutSection__buttons {
      flex-direction: column;
      gap: 0;
      .button__wrapper,
      a {
        width: 100%;
        text-align: center;
      }
    }
  }
`;

export default function AboutSection() {
  return (
    <AboutSectionStyle>
      <div className="container">
        <div className="aboutSection__left">
          <SectionTittle
            subheading="Let me introduce myself"
            heading="About Me"
          />
          <Ptext>
            I am a Sound Tech who loves Music and Technology, i've been playing
            with hardware since I was a kid, lately with 3D design and
            animation, and now I've found that i can blend all my passions
            together trought Web Development
          </Ptext>
          <div className="aboutSection__buttons">
            <Button btnLink="/projects" btnText="Works" />
            <Button btnLink="/about" btnText="More..." outline />
          </div>
        </div>
        <div className="aboutSection__right">
          <img src={AboutImg} alt="" />
        </div>
      </div>
    </AboutSectionStyle>
  );
}
