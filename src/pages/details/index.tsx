import { View } from 'react-native';
import { useQuery } from '@apollo/client';
import { Chip, Container, Text } from '../../components/styles';
import colors from '../../utils/colors';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../routes/types';
import { GET_CHARACTER } from '../../services/details';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { CharacterContainer, CharacterImage, EpisodeContent, ExpandableContent, InfoContainer } from './styles';
import Loading from '../../components/Loading';
import { Canvas } from '@react-three/fiber/native';
import { getStatusColor } from '../../utils';
import { Status } from '../../interfaces/character';
import { useMemo } from 'react';
import Expandable from '../../components/Expandable';
import { useTranslation } from 'react-i18next';

type RouteProps = RouteProp<RootStackParamList, 'Details'>;
type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Details'>;

export default function DetailsScreen() {
  const { t } = useTranslation();
  const route = useRoute<RouteProps>();
  const navigation = useNavigation<NavigationProp>();
  const id = route?.params?.id;

  if (!id) {
    navigation.navigate('Home')
  }

  const { loading, data, error } = useQuery(GET_CHARACTER, {
    variables: { id },
  });
  const statusColor = useMemo(() => getStatusColor(data?.character.status as Status), [data]);

  const loader = useMemo(() => (
    <Canvas>
      <Loading />
    </Canvas>
  ), [])

  if (error) {
    return (
      <View>
        <Text color={colors.black}>
          {error?.message ||
            'An error occurred while fetching characters, please try again shortly.'}
        </Text>
      </View>
    );
  }

  return (
    <Container backgroundColor={colors.green}>
      {
        loading ? (
          loader
        ) : (
          <CharacterContainer>
            <CharacterImage source={{ uri: data?.character.image }}>
              <Chip color={statusColor}>
                <Text>
                  {t(`status.${data?.character.status.toLowerCase()}`)}
                </Text>
              </Chip>
            </CharacterImage>
            <InfoContainer>
              <Text numberOfLines={1} color={colors.green} fontWeight='bold' fontSize='22px'>{data?.character.name}</Text>
              <Text color={colors.gray} fontWeight='bold'>{t(`species.${data?.character.species.toLowerCase()}`)}</Text>
            </InfoContainer>
            <ExpandableContent>
              <Expandable title={t('details.personalInfo')}>
                <Text fontWeight='bold' color={colors.black}>
                  {t('details.gender')}: <Text color={colors.black}>
                    {t(`status.${data?.character.gender.toLowerCase()}`)}
                  </Text>
                </Text>
                <Text fontWeight='bold' color={colors.black}>
                  {t('details.type')}: <Text color={colors.black}>
                    {(data?.character.type && t(`type.${data?.character.type.toLowerCase()}`)) || t(`status.unknown`)}
                  </Text>
                </Text>
              </Expandable>
              <Expandable title={t('details.locations')}>
                <Text fontWeight='bold' color={colors.black}>
                  {t('details.currentLocation')}: <Text color={colors.black}>{data?.character.location.type} {data?.character.location.name}</Text>
                </Text>
                <Text fontWeight='bold' color={colors.black}>
                  {t('details.origin')}: <Text color={colors.black}>{data?.character.origin.type} {data?.character.origin.name}</Text>
                </Text>
              </Expandable>
              <Expandable title={`${t('details.episodes')} (${data?.character.episode.length})`}>
                {data?.character.episode.map((i, idx) => (
                  <EpisodeContent key={idx}>
                    <Text fontWeight='bold' color={colors.black}>{i.episode}<Text color={colors.black}> - {i.air_date}</Text></Text>
                    <Text color={colors.green} fontWeight='bold'>{i.name}</Text>
                  </EpisodeContent>
                ))}
              </Expandable>
            </ExpandableContent>
          </CharacterContainer>
        )
      }
    </Container >
  );
}
