import React, {useEffect, useState} from 'react';

import {StatusBar, Dimensions} from 'react-native';
import styled from 'styled-components/native';

import Header from '../components/Header';
import Hero from '../components/Hero';
import Movies from '../components/Movies';

import {getGeoLocation, filterByCountry} from '../services/MovieFilter';

const api = require('../assets/movies.json');

const Container = styled.ScrollView`
  flex: 1;
  background-color: #000;
`;

const Poster = styled.ImageBackground`
  width: 100%;
  height: ${(Dimensions.get('window').height * 81) / 100}px;
`;

const Home = ({navigation}) => {
  const [position, setPosition] = useState(null);
  const [nationalMovies, setNationalMovies] = useState([]);
  const [internationalMovies, setInternationalMovies] = useState([]);

  useEffect(() => {
    const obtainLocation = async () => {
      try {
        const positionResult = await getGeoLocation();
        setPosition(positionResult);
      } catch (error) {
        console.log('Obtain location error', error);
      }
    };

    obtainLocation();
  }, []);

  useEffect(() => {
    const loadingNationalMovies = async () => {
      const allMovies = require('../assets/movies.json');
      let filteredNationalMovies = [];

      if (position !== null) {
        filteredNationalMovies = await filterByCountry(allMovies, position);
        setNationalMovies(filteredNationalMovies);
      }

      setInternationalMovies(
        allMovies.filter((item, index) => {
          return !filteredNationalMovies.includes(item);
        }),
      );
    };

    loadingNationalMovies();
  }, [position]);

  console.log('position :', position);
  console.log('nationalMovies :', nationalMovies);
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <Container>
        <Poster source={require('../assets/poster.jpg')}>
          <Header navigation={navigation} />
          <Hero />
        </Poster>
        {nationalMovies && nationalMovies.length > 0 && (
          <Movies label="Nacional" item={nationalMovies} />
        )}
        <Movies label="Recomendados" item={internationalMovies} />
        <Movies label="Top 10" item={api} />
      </Container>
    </>
  );
};

export default Home;
