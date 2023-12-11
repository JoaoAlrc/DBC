import styled from 'styled-components/native';
import colors from '../../utils/colors';

export const Content = styled.View` 
  align-items: center;
  padding: 10px;
  border-radius: 20px;
  background-color: ${colors.light};
`;

export const InfoContent = styled.View` 
  padding: 10px; 
  background-color: ${colors.light};
  border-radius: 20px;
`;

export const Button = styled.TouchableOpacity<{ disabled?: boolean }>`  
  background-color: ${colors.light};
  border-radius: 20px;
`;