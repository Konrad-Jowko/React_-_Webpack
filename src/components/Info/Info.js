import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {info} from '../../data/dataStore';

const Info = () => (
  <Container>
    <Hero titleText={info.title} imgSrc={info.imgSrc} />
    <p>{info.content}</p>
  </Container>
);

export default Info;
