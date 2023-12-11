import React, { memo } from 'react';
import { CharacterContainer, CharacterImage, InfoContainer } from './styles';
import { getStatusColor } from '../../../../utils';
import { Chip, Text } from '../../../../components/styles';
import colors from '../../../../utils/colors';
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { ViewToken } from 'react-native';
import { Character, Status } from '../../../../interfaces/character';
import { useTranslation } from 'react-i18next';

interface CharacterProps {
  item: Character;
  vItems: Animated.SharedValue<ViewToken[]>;
  onPressItem: (id: number) => void;
}

const CharacterItem: React.FC<CharacterProps> = ({ item, vItems, onPressItem }) => {
  const { t } = useTranslation();
  const statusColor = getStatusColor(item.status as Status);
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
      <CharacterContainer onPress={() => onPressItem(item.id)}>
        <CharacterImage source={{ uri: item.image }}>
          <Chip color={statusColor}>
            <Text>
              {t(`status.${item.status.toLowerCase()}`)}
            </Text>
          </Chip>
        </CharacterImage>
        <InfoContainer>
          <Text numberOfLines={1} color={colors.green} fontWeight='bold' fontSize='22px'>
            {item.name}
          </Text>
          <Text color={colors.gray} fontWeight='bold'>
            {t(`species.${item.species.toLowerCase()}`)}
          </Text>
        </InfoContainer>
      </CharacterContainer>
    </Animated.View>
  );
};

export default memo(CharacterItem);
