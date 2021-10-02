import React, { useState, useLayoutEffect, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';

import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';

import { Container, Input, Button, ButtonText } from './styles';
import { AuthContext } from '../../contexts/auth';

export const NewPost = () => {
  const navigation = useNavigation();
  const { user } = useContext(AuthContext);

  const [ post, setPost ] = useState('');

  useLayoutEffect(() => {
    const options = navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => handlePost()} disabled={!post}>
          <ButtonText>Compartilhar</ButtonText>
        </Button>
      )
    });
  }, [navigation, post]);

  const handlePost = async() => {
    let avatarUrl = null;
    try {
      let response = await storage().ref('users').child(user?.uid)
      .getDownloadURL();

      avatarUrl = response;
    }
    catch(error) { avatarUrl = null }

    await firestore().collection('posts')
    .add({
      created: new Date(),
      content: post,
      author: user.name,
      likes: 0,
      avatarUrl,
      userId: user.uid,
    })
    .then(() => {
      setPost('');
      alert('Post criado com sucesso');
    })
    .catch((error) => alert(error));
  }

  return <Container>
    <Input
    placeholder='O que está acontecendo?'
    placeholderTextColor='#ddd'
    multiline={true}
    maxLength={300}
    value={post}
    onChangeText={(ev) => setPost(ev)}
    autoCorrect={false}
    />
  </Container>
}
