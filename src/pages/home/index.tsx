import {Text, View} from 'react-native';
import {GET_CHARACTERS} from '../../services/home';
import {useQuery} from '@apollo/client';
import CharactersList from './components/CharactersList';
import {Container} from './components/CharactersList/styles';

export default function HomeScreen() {
  const {loading, data, fetchMore, error} = useQuery(GET_CHARACTERS, {
    variables: {page: 1},
  });

  const handleEndReached = () => {
    const nextPage = data.characters.info.next;

    if (!nextPage) {
      return;
    }

    fetchMore({
      variables: {page: nextPage},
      updateQuery: (prev, {fetchMoreResult}) => {
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
  return (
    <Container>
      {loading ? (
        <Text>Loading ...</Text>
      ) : (
        <CharactersList
          data={data.characters.results}
          onEndReached={handleEndReached}
        />
      )}
    </Container>
  );
}
