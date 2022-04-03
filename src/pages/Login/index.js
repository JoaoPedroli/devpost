import React, { useContext, useState } from 'react';
import { Text, ActivityIndicator } from 'react-native';
import { Container, Title, Input, Button, ButtonText, SignUpButton, SignUpText } from './styles';
import { AuthContext } from '../../contexts/auth';

import { primary, whites } from '../../global/theme.json';

export const Login = () => {
  const { signUp, signIn, loadingAuth } = useContext(AuthContext);

  const [ login, setLogin ] = useState(true);
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const toggleLogin = () => {
    setLogin(!login);
    setName('');
    setEmail('');
    setPassword('');
  }

  const handleLogin = () => {
    if(email === '' || password === '') {
      alert('Preencha todos os campos');
      return;
    }

    signIn(email, password);
  }

  const handleSignUp = () => {
    if(name === '' || email === '' || password === '') {
      alert('Preencha todos os campos');
      return;
    }

    signUp(name, email, password);
  }

  return (
    <Container>
      <Title>
        Dev
        <Text style={{ color: primary }}>Post</Text>
      </Title>

      {login ? null
      : <Input
        placeholder='Nome'
        value={name}
        onChangeText={(ev) => setName(ev)}/>
      }

      <Input
      placeholder='email@email.com'
      value={email}
      onChangeText={(ev) => setEmail(ev)}/>

      <Input
      placeholder='******'
      secureTextEntry={true}
      value={password}
      onChangeText={(ev) => setPassword(ev)}/>

      <Button onPress={() => login ? handleLogin() : handleSignUp()}>
        {loadingAuth
        ? <ActivityIndicator size={20} color={whites[0]}/>
        : <ButtonText>{login ? 'Acessar' : 'Cadastrar'}</ButtonText>
        }

      </Button>

      <SignUpButton onPress={() => toggleLogin()}>
        <SignUpText>
          {login ? 'Criar uma conta' : 'Já tenho uma conta'}
        </SignUpText>
      </SignUpButton>
    </Container>
  );
}
