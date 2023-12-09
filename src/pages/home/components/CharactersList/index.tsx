import React from 'react';
import {FlatList} from 'react-native';
import {Character} from '../../../../services/home';
import CharacterItem from '../CharacterItem';
import {Container} from '../../../../components/styles';

interface CharactersListProps {
  onEndReached: () => void;
  data: Character[];
}

const CharactersList: React.FC<CharactersListProps> = ({
  onEndReached,
  data,
}) => {
  return (
    <Container>
      <FlatList
        data={data}
        renderItem={({item}) => <CharacterItem item={item} />}
        keyExtractor={(_, index) => index.toString()}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.1}
      />
    </Container>
  );
};

export default CharactersList;
