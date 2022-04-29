import React from 'react';

import {StatusBar, Dimensions} from 'react-native';
import {useSpring, animated, config, useSprings} from '@react-spring/native';

import styled from 'styled-components/native';

import Header from '../components/Header';
import Hero from '../components/Hero';
import Movies from '../components/Movies';

const api = [
  require('../assets/movie1.jpg'),
  require('../assets/movie2.jpg'),
  require('../assets/movie3.jpg'),
  require('../assets/movie4.jpg'),
];

const Container = styled.ScrollView`
  flex: 1;
  background-color: #000;
`;

const Poster = styled.ImageBackground`
  width: 100%;
  height: ${(Dimensions.get('window').height * 81) / 100}px;
`;

const AnimatedMovies = animated(Movies);

const Home = () => {
  const animations = [];
  animations.push({
    to: {opacity: 0},
    delay: 2000,
    config: {duration: 2000, ...config.default},
  });
  animations.push({
    to: {opacity: 0},
    delay: 1000,
    config: {duration: 3000, ...config.default},
  });
  const springProps = useSprings(2, animations);
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <Container>
        <Poster source={require('../assets/poster.jpg')}>
          <Header />
          <Hero />
        </Poster>
        {springProps.map((item, index) => {
          return (
            <AnimatedMovies
              key={index}
              style={item}
              label="Recomendados"
              item={api}
            />
          );
        })}

        <AnimatedMovies label="Top 10" item={api} />
      </Container>
    </>
  );
};

export default Home;
