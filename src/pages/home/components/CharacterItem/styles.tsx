import styled from 'styled-components/native';

export const CharacterContainer = styled.View`
  margin-bottom: 16px;
  background-color: #fff;
  padding: 16px;
  border-radius: 8px;
  elevation: 3;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.2;
  shadow-radius: 3px;
`;

export const CharacterName = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: red;
`;

export const CharacterImage = styled.Image`
  width: 100%;
  height: 200px;
  margin-top: 8px;
  border-radius: 8px;
`;

export const CharacterDescription = styled.Text`
  margin-top: 8px;
  color: blue;
`;
