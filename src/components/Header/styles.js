import styled from 'styled-components/native';

import { backgrounds, whites } from '../../global/theme.json';

export const Container = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  background: ${ backgrounds[0] };
  border-bottom-color: ${ whites[3] };
  border-bottom-width: 1px;
  padding-top: 15px;
`;

export const Title = styled.Text`
  font-size: 27px;
  color: ${ whites[0] };
  font-weight: bold;
  padding-bottom: 15px;
`;
