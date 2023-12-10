import styled from 'styled-components/native';
import colors from '../utils/colors';

export const Container = styled.View<{ backgroundColor?: string }>`
  flex: 1;
  background-color: ${({ backgroundColor }) => backgroundColor || colors.light}
`;

export const Input = styled.TextInput` 
  background-color: ${colors.light}; 
  border-radius: 8px;
  padding: 8px; 
`;

export const Button = styled.TouchableOpacity<{ disabled?: boolean }>` 
  align-items: center;
  background-color: ${({ disabled }) => disabled ? colors.gray : colors.green};
  border-radius: 8px;
`;

export const Text = styled.Text<{
  color?: string;
  fontSize?: string;
  fontWeight?: string;
}>`
  color: ${({ color }) => color || colors.light};
  font-size: ${({ fontSize }) => fontSize || '16px'};
  font-weight: ${({ fontWeight }) => fontWeight || 'normal'};
`;

export const Chip = styled.View<{
  color?: string;
}>`
  align-items: center;
  background-color: ${({ color }) => color || colors.light};
  padding-vertical: 4px;
  padding-horizontal: 8px;
  align-self: flex-start;
  border-radius: 4px;
`;