import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Expandable from '.';
import { Text } from '../styles';

jest.mock('@react-navigation/native', () => ({
    useNavigation: () => ({
        navigate: jest.fn(),
    }),
    useRoute: () => null
}));
jest.mock('react-i18next', () => ({
    useTranslation: () => ({ t: key => key }),
}));

it('renderiza o componente Expandable corretamente', () => {
    const { getByText, queryByText } = render(
        <Expandable title="Título">
            <p>Conteúdo expandido</p>
        </Expandable>
    );
    expect(getByText('Título')).toBeTruthy();
    expect(queryByText('Conteúdo expandido')).toBeNull();
});

it('expande e recolhe o conteúdo ao clicar no botão', () => {
    const { getByText, queryByText } = render(
        <Expandable title="Título">
            <Text>Conteúdo expandido</Text>
        </Expandable>
    );

    const button = getByText('Título');

    expect(queryByText('Conteúdo expandido')).toBeNull();
    fireEvent.press(button);
    expect(getByText('Conteúdo expandido')).toBeTruthy();
    fireEvent.press(button);
    expect(queryByText('Conteúdo expandido')).toBeNull();
});
