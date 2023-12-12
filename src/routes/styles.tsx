import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import colors from '../utils/colors';

const height = Dimensions.get('window').height

export const Scene = styled.View` 
    height: ${height - 180}px;
`;

export const Container = styled.View`  
  flex: 1;
  background-color: ${colors.light}
`