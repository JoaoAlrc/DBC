import styled from 'styled-components/native';
import colors from '../../../../utils/colors';
import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width

export const CharacterContainer = styled.TouchableOpacity`  
  align-self: center; 
  background-color: ${colors.green}; 
  border-radius: 20px;
  margin-bottom: 18px;
  overflow: hidden;
  elevation: 3;
  width: ${(width / 2) - 16}px;
  shadow-color: ${colors.black};
  shadow-offset: 0px 2px;
  shadow-opacity: 0.2;
  shadow-radius: 3px; 
`;

export const InfoContainer = styled.View` 
  background-color: ${colors.light};
  padding: 16px;  
`;

export const CharacterImage = styled.ImageBackground`
  padding: 16px;
  height: 300px;
`; 
