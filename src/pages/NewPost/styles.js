import styled from 'styled-components';

import { secondary, backgrounds, whites } from '../../global/theme.json';

export const Container = styled.View`
  flex: 1;
  background: ${ backgrounds[2] };
`;

export const Input = styled.TextInput`
  background-color: transparent;
  margin: 10px;
  font-size: 20px;
  color: ${ whites[0] };
`;

export const Button = styled.TouchableOpacity`
  background: ${ secondary };
  margin-right: 7px;
  border-radius: 4px;
  padding: 5px 12px;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  color: ${ whites[0] };
  font-size: 16px;
`;
