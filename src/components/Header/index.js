import React from 'react';
import { Text } from 'react-native';

import { primary } from '../../global/theme.json';
import { Container, Title } from './styles';

export const Header = () => {
  return <Container>
    <Title>
      Dev
      <Text style={{fontStyle: 'italic', color: primary}}>Post</Text>
    </Title>
  </Container>
}
