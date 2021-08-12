import React from 'react';
import styled from 'styled-components';
import Ptext from './Ptext';
import MapImg from '../assets/images/map.png';

const MapStyles = styled.div`
  background: url(${MapImg}) no-repeat center / cover;
  min-height: 400px;
  .container {
    position: relative;
    min-height: 400px;
  }
  .map__card {
    position: absolute;
    right: 10%;
    bottom: 10%;
    padding: 2rem;
    background: var(--deep-dark);
    width: 300px;
    max-width: 300px;
    border-radius: 12px;
  }
  .map__heading {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  .map__card-link {
    display: inline-block;
    font-size: 1.6rem;
    margin-top: 3rem;
    text-decoration: underline;
  }
  @media only screen and (max-width: 768px) {
    background-position: 80% center;
  }
  @media only screen and (max-width: 400px) {
    .map__card {
      max-width: none;
      right: auto;
    }
  }
`;

export default function Map() {
  return (
    <MapStyles>
      <div className="container">
        <div className="map__card">
          <h3 className="map__card-heading">Here I am</h3>
          <Ptext>San Pedro Alcántara, Marbella</Ptext>
          <a
            href="https://www.google.es/maps/@36.4824467,-5.005917,15z"
            target="_blank"
            rel="noreferrer"
            className="map__card-link"
          >
            Open in Google Maps
          </a>
        </div>
      </div>
    </MapStyles>
  );
}
