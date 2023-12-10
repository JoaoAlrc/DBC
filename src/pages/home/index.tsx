import { FlatList, View, ViewToken } from 'react-native';
import { GET_CHARACTERS } from '../../services/home';
import { useQuery } from '@apollo/client';
import { Container, Text } from '../../components/styles';
import colors from '../../utils/colors';
import { useCallback } from 'react';
import CharacterItem from './components/CharacterItem';
import { useSharedValue } from 'react-native-reanimated';

export default function HomeScreen() {
  const { loading, data, fetchMore, refetch, networkStatus, error } = useQuery(GET_CHARACTERS, {
    variables: { page: 1 },
    notifyOnNetworkStatusChange: true,
  });

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

  const vItems = useSharedValue<ViewToken[]>([]);
  const handleViewableItemsChanged = useCallback(({ viewableItems }) => vItems.value = viewableItems, []);

  return (
    <Container backgroundColor={colors.green}>
      <FlatList
        data={data?.characters.results}
        renderItem={({ item }) => <CharacterItem {...{ item, vItems }} />}
        keyExtractor={(item, idx) => `${item.id} - ${idx}`}
        onEndReached={data?.characters.results && handleEndReached}
        onViewableItemsChanged={handleViewableItemsChanged}
        onRefresh={refetch}
        refreshing={loading}
        onEndReachedThreshold={0.1}
        numColumns={2}
        contentContainerStyle={{ paddingTop: 16 }}
        columnWrapperStyle={{ justifyContent: 'space-around' }}
        ListEmptyComponent={
          <Text color={colors.black}>
            No data found, try with another filters.
          </Text>
        }
      />
    </Container>
  );
}
