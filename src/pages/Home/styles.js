import styled from 'styled-components/native';
import { backgrounds } from '../../global/theme.json';

export const Container = styled.View`
  flex: 1;
  background: ${ backgrounds[0] };
`;

export const ButtonPost = styled.TouchableOpacity`
  background: ${ backgrounds[1] };
  width: 60px;
  height: 60px;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 6%;
  right: 6%;
  border-radius: 30px;
`;

export const ListPosts = styled.FlatList`

`;
