import styled from 'styled-components/native';
import colors from '../../utils/colors';

export const CharacterContainer = styled.ScrollView`   
  background-color: ${colors.green};   
`;

export const InfoContainer = styled.View` 
  background-color: ${colors.light};
  padding: 16px;  
`;

export const CharacterImage = styled.ImageBackground`
  padding: 16px;
  height: 300px;
  elevation: 3; 
  shadow-color: ${colors.black};
  shadow-offset: 0px 2px;
  shadow-opacity: 0.2;
  shadow-radius: 3px; 
`;

export const ExpandableContent = styled.View`
  padding: 16px;
  rowGap: 16px;
`;

export const EpisodeContent = styled.View`
  padding-vertical: 8px;
  border-bottom: solid;
  border-bottom-width: 1px;
  border-color: ${colors.black};
`;