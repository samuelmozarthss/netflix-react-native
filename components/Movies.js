import React from 'react';
import {Dimensions} from 'react-native';

import styled from 'styled-components/native';

const Container = styled.View`
  padding: 20px 0;
`;

const Label = styled.Text`
  color: #fff;
  font-size: 16px;
  margin: 0 0 5px 10px;
`;
const MovieScroll = styled.ScrollView`
  padding-left: 10px;
`;

const MoviePoster = styled.Image`
  width: ${Math.round((Dimensions.get('window').width * 28) / 100)}px;
  height: 150px;
`;

const MovieCard = styled.View`
  padding-right: 9px;
`;

/**
 * Utilizando a biblioteca react-spring
 * Anime os componentes  Moviews para que ele desapareça assim que essa tela for construida.
 * Leve a opacidade dele de 1 para 0
 * Utilizem várias molas -> useSprings
 * O item 1 deve desaparecer em 1 segundos....
 * O item 2 deve desaparecer em 2 segundos....
 */

const Movies = ({label, item}) => {
  return (
    <Container>
      <Label>{label}</Label>
      <MovieScroll horizontal>
        {item.map((movie, item) => {
          return (
            <MovieCard key={String(item)}>
              <MoviePoster resizeMode="cover" source={movie} />
            </MovieCard>
          );
        })}
      </MovieScroll>
    </Container>
  );
};

export default Movies;
