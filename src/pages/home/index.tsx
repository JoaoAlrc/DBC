import { FlatList, View, ViewToken } from 'react-native';
import { GET_CHARACTERS } from '../../services/home';
import { useQuery } from '@apollo/client';
import { Container, Input, Text } from '../../components/styles';
import colors from '../../utils/colors';
import { Suspense, useCallback, useMemo, useState } from 'react';
import CharacterItem from './components/CharacterItem';
import { useSharedValue } from 'react-native-reanimated';
import { Canvas } from '@react-three/fiber/native';
import Loading from '../../components/Loading';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes/types';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { debounce } from 'lodash';
import { InputContent } from './styles';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export default function HomeScreen() {
  const { t } = useTranslation();
  const navigation = useNavigation<NavigationProp>()
  const [searchTerm, setSearchTerm] = useState<string>('');

  const { loading, data, fetchMore, refetch, error } = useQuery(GET_CHARACTERS, {
    variables: { page: 1, nameFilter: searchTerm }
  });

  const debouncedSearch = useMemo(() =>
    debounce((text) => {
      refetch({ page: 1, nameFilter: text });
    }, 300),
    []);

  const handleEndReached = () => {
    const nextPage = data.characters.info.next;

    if (!nextPage) {
      return;
    }

    fetchMore({
      variables: { page: nextPage },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) {
          return prev;
        }
        return {
          ...fetchMoreResult,
          characters: {
            ...fetchMoreResult.characters,
            results: [
              ...prev.characters.results,
              ...fetchMoreResult.characters.results,
            ],
          },
        };
      },
    });
  };

  const vItems = useSharedValue<ViewToken[]>([]);
  const handleViewableItemsChanged = useCallback(({ viewableItems }) => vItems.value = viewableItems, []);
  const onPressItem = (id: number) => navigation.navigate('Details', { id })

  const loader = useMemo(() => (
    <Canvas>
      <Suspense fallback={null}>
        <Loading />
      </Suspense>
    </Canvas>
  ), [])

  if (error) {
    return (
      <View>
        <Text>
          {error?.message ||
            'An error occurred while fetching characters, please try again shortly.'}
        </Text>
      </View>
    );
  }

  return (
    <Container backgroundColor={colors.green}>
      <InputContent>
        <Input
          placeholder={t('search.placeholder')}
          value={searchTerm}
          onChangeText={(text) => {
            setSearchTerm(text);
            debouncedSearch(text);
          }}
        />
      </InputContent>
      {loading ? (
        loader
      ) : <FlatList
        data={data?.characters.results}
        renderItem={({ item }) => <CharacterItem {...{ item, vItems, onPressItem }} />}
        keyExtractor={(item, idx) => `${item.id} - ${idx}`}
        onEndReached={data?.characters.results && handleEndReached}
        onViewableItemsChanged={handleViewableItemsChanged}
        onRefresh={refetch}
        refreshing={loading}
        onEndReachedThreshold={0.1}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-around' }}
        ListEmptyComponent={loading ? (
          loader
        ) : (
          <Text color={colors.black}>
            {t('home.noDataFound')}
          </Text>
        )
        }
      />}
    </Container>
  );
}
