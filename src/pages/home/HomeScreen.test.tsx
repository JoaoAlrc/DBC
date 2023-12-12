import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import { MockedProvider } from '@apollo/client/testing';
import { GET_CHARACTERS } from '../../services/home';
import HomeScreen from '.';

jest.mock('@react-navigation/native', () => ({
}));
jest.mock('@react-three/fiber/native', () => ({
    Canvas: () => null,
}));
jest.mock('@react-navigation/native', () => ({
    useNavigation: () => ({
        navigate: jest.fn(),
    }),
}));
jest.mock('react-i18next', () => ({
    useTranslation: () => ({ t: key => key }),
}));

const mockCharacterData = {
    characters: {
        info: {
            next: 2
        },
        results: [
            {
                id: 1,
                name: 'Rick Sanchez',
                image: 'url-to-rick-image',
                status: 'Alive',
                species: 'Human',
            },
        ]
    }
};

const mocks = [
    {
        request: {
            query: GET_CHARACTERS,
            variables: { page: 1, nameFilter: '' },
        },
        result: { data: mockCharacterData },
    },
];

describe('HomeScreen', () => {
    it('renders and displays character data on initial load', async () => {
        const { getByText, queryByText } = render(
            <MockedProvider mocks={mocks} addTypename={false}>
                <HomeScreen />
            </MockedProvider>
        );

        await waitFor(() => {
            expect(queryByText('Loading...')).toBeFalsy();
            expect(getByText('Rick Sanchez')).toBeTruthy();
        });
    });
});
