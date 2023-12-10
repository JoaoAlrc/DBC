import React, { useCallback } from 'react';
import { ActivityIndicator, FlatList, ViewToken } from 'react-native';
import { Character } from '../../../../services/home';
import CharacterItem from '../CharacterItem';
import { Text } from '../../../../components/styles';
import { ApolloQueryResult, OperationVariables } from '@apollo/client';
import colors from '../../../../utils/colors';
import { useSharedValue } from 'react-native-reanimated';

interface CharactersListProps {
  onEndReached: () => void;
  data: Character[];
  refetch: (variables?: Partial<OperationVariables>) => Promise<ApolloQueryResult<any>>;
  loading: boolean;
}

const CharactersList: React.FC<CharactersListProps> = ({
  onEndReached,
  data,
  refetch,
  loading
}) => {
  const vItems = useSharedValue<ViewToken[]>([]);
  const handleViewableItemsChanged = useCallback(({ viewableItems }) => vItems.value = viewableItems, []);

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <CharacterItem {...{ item, vItems }} />}
      keyExtractor={(item, idx) => `${item.id} - ${idx}`}
      onEndReached={data?.length && onEndReached}
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
      ListFooterComponent={loading ? (
        <ActivityIndicator />
      ) : null}
    />
  );
};

export default CharactersList;
