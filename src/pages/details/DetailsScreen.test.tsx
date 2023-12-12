import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import { MockedProvider } from '@apollo/client/testing';
import { GET_CHARACTER } from '../../services/details';
import DetailsScreen from '.';

jest.mock('@react-navigation/native', () => ({
    useNavigation: () => ({
        navigate: jest.fn(),
    }),
    useRoute: () => ({ params: { id: 1 } })
}));
jest.mock('react-i18next', () => ({
    useTranslation: () => ({ t: key => key }),
}));

const mockCharacterData = {
    character: {
        id: 1,
        name: 'Rick Sanchez',
        image: 'url-to-rick-image',
        status: 'Alive',
        species: 'Human',
        gender: 'Male',
        origin: {
            type: 'Origin'
        },
        location: {
            type: 'Origin'
        },
        episode: []
    },
};

const mocks = [
    {
        request: {
            query: GET_CHARACTER,
            variables: { id: 1 },
        },
        result: { data: mockCharacterData },
    },
];

describe('DetailsScreen', () => {
    it('renders and displays character data', async () => {
        const { getByText, queryByText } = render(
            <MockedProvider mocks={mocks} addTypename={false}>
                <DetailsScreen />
            </MockedProvider>
        );

        await waitFor(() => {
            expect(queryByText('Loading...')).toBeFalsy();
            expect(getByText('Rick Sanchez')).toBeTruthy();
        });
    });
});
