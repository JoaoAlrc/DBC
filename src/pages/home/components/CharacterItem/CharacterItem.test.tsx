import React from 'react';
import { render } from '@testing-library/react-native';
import CharacterItem from '.';
import { Species, Status } from '../../../../interfaces/character';

jest.mock('react-i18next', () => ({
    useTranslation: () => ({ t: key => key }),
}));

describe('CharacterItem', () => {
    it('renders character name and species', () => {
        const item = {
            id: 1,
            name: 'Rick Sanchez',
            image: 'url-to-image',
            status: 'Alive' as Status,
            species: 'Human' as Species,
        };

        const { getByText } = render(<CharacterItem item={item} vItems={{ value: [] }} onPressItem={() => { }} />);

        expect(getByText('Rick Sanchez')).toBeTruthy();
    });
});
