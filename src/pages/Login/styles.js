import styled from 'styled-components/native';
import { backgrounds, whites, secondary } from '../../global/theme.json';

export const Container = styled.View`
  flex: 1;
  background: ${ backgrounds[0] };
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  color: ${ whites[0] };
  font-size: 55px;
  font-weight: bold;
  font-style: italic;
`;

export const Input = styled.TextInput`
  width: 80%;
  background: ${ whites[1] };
  padding: 10px;
  margin-top: 10px;
  border-radius: 7px;
  font-size: 17px;
`;
export const Button = styled.TouchableOpacity`
  width: 80%;
  background: ${ secondary };
  padding: 10px;
  margin-top: 10px;
  border-radius: 7px;
  justify-content: center;
  align-items: center;
`;
export const ButtonText = styled.Text`
  color: ${ whites[0] };
  font-size: 20px;
`;
export const SignUpButton = styled.TouchableOpacity`
  width: 100%;
  margin-top: 10px;
  justify-content: center;
  align-items: center;
`;
export const SignUpText = styled.Text`
  color: ${ whites[2] };
  font-size: 15px;
`;
