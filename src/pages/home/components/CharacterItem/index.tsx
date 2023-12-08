import React from 'react';
import {
  CharacterContainer,
  CharacterDescription,
  CharacterImage,
  CharacterName,
} from './styles';
import { Character } from '../../../../services/home';

interface CharacterProps {
  item: Character;
}

const CharacterItem: React.FC<CharacterProps> = ({ item }) => {

  return (
    <CharacterContainer>
      <CharacterName>{item.name}</CharacterName>
      <CharacterImage source={{ uri: item.image }} />
      <CharacterDescription>{item.status}</CharacterDescription>
      <CharacterDescription>{item.type}</CharacterDescription>
    </CharacterContainer>
  );
};

export default CharacterItem;
