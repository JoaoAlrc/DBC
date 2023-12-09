import styled from 'styled-components/native';

export const Scene = styled.View` 
  flex: 1
`;

export const Input = styled.TextInput`
  position: absolute;
  background-color: #F0F2EB;
  bottom: 80px;
  left: 16px;
  right: 16px;
  border-radius: 8px;
  padding-vertical: 8px;
  padding-horizontal: 8px;
`;

export const Button = styled.TouchableOpacity<{ disabled: boolean }>` 
  align-items: center;
  background-color: ${({ disabled }) => disabled ? '#a5a5a9' : '#5CAD4A'};
  position: absolute;
  bottom: 40px;
  left: 16px;
  right: 16px;
  border-radius: 8px;
  padding-vertical: 8px;
  padding-horizontal: 8px;
`;

export const Text = styled.Text`
  color: #ffffff;
`;