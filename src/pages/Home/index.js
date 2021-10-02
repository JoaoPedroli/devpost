import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

import { Container, ButtonPost, ListPosts } from './styles';
import { Header } from '../../components/Header';

export const Home = () => {
  const navigation = useNavigation();
  const [ posts, setPosts ] = useState()

  return (
    <Container>
      <Header/>

      <ListPosts
      data={posts}
      renderItem={({ item }) => (<Text></Text>)}
      />

      <ButtonPost onPress={() => navigation.navigate('NewPost')}>
        <Icon name='edit-2' color='#fff' size={25}/>
      </ButtonPost>
    </Container>
  );
}
