import React from 'react';
import { Character, CharacterStatus } from '../../../../services/home';
import { CharacterContainer, CharacterImage, InfoContainer } from './styles';
import { getStatusColor } from '../../../../utils';
import { Chip, Text } from '../../../../components/styles';
import colors from '../../../../utils/colors';
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { ViewToken } from 'react-native';

interface CharacterProps {
  item: Character;
  vItems: Animated.SharedValue<ViewToken[]>;
}

const CharacterItem: React.FC<CharacterProps> = ({ item, vItems }) => {
  const statusColor = getStatusColor(item.status as CharacterStatus);
  const rStyle = useAnimatedStyle(() => {
    const isVisible = Boolean(vItems.value.filter(i => i.isViewable).find(i => i.item.id === item.id))
    return {
      opacity: withTiming(isVisible ? 1 : 0),
      transform: [{
        scale: withTiming(isVisible ? 1 : 0.6)
      }]
    }
  }, [])

  return (
    <Animated.View style={rStyle}>
      <CharacterContainer>
        <CharacterImage source={{ uri: item.image }}>
          <Chip color={statusColor}>
            <Text>
              {item.status}
            </Text>
          </Chip>
        </CharacterImage>
        <InfoContainer>
          <Text numberOfLines={1} color={colors.green}>{item.name}</Text>
          <Text color={colors.gray}>{item.species}</Text>
        </InfoContainer>
      </CharacterContainer>
    </Animated.View>
  );
};

export default CharacterItem;
