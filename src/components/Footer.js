import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import Ptext from './Ptext';

const FooterStyles = styled.div`
  padding-top: 10rem;
  background-color: var(--deep-dark);
  .container {
    display: flex;
    padding-bottom: 3rem;
    gap: 2rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1-title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
  }
  .para {
    margin-left: 0;
  }
  p {
    padding-top: 2rem;
  }
  @media only screen and (max-width: 768px) {
    .container {
      text-align: center;
      flex-direction: column;
      gap: 1rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer_col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyles>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1-title">David Martinez</h1>
          <Ptext>
            Freelance web designer and developer from San Pedro de Alcántara,
            Marbella.
          </Ptext>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Page Nav"
            Links={[
              {
                title: 'Home',
                path: '/',
                type: 'Link',
              },
              {
                title: 'About',
                path: '/about',
                type: 'Link',
              },
              {
                title: 'Projects',
                path: '/projects',
                type: 'Link',
              },
              {
                title: 'Contact',
                path: '/contact',
                type: 'Link',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            Links={[
              {
                title: 'E-Mail',
                path: 'mailto:da.b@dabmartinez.com',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="Social Media"
            Links={[
              {
                title: 'Facebook',
                path: 'https://www.facebook.com/dabeat360/',
              },
              {
                title: 'Instagram',
                path: 'https://www.instagram.com/dabeat360/',
              },
              {
                title: 'Youtube',
                path: 'https://www.youtube.com/channel/UC9iBk4HsF-7Ehm7zj_WsnOQ/featured',
              },
              {
                title: 'Linkedin',
                path: 'https://www.linkedin.com/in/dabmartinez/',
              },
              {
                title: 'SoundCloud',
                path: 'https://soundcloud.com/user-51513772',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <Ptext>© 2021 - David Martínez</Ptext>
        </div>
      </div>
    </FooterStyles>
  );
}
