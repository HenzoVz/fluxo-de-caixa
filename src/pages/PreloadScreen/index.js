import React from 'react';
import {Container, TextTitle, Logo} from './styles';
import {useNavigation} from '@react-navigation/native';
import firebase from '../../FirebaseConnection';

export default () => {
  const navigation = useNavigation();

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      navigation.navigate('Caixa');
    } else {
      navigation.navigate('Home');
    }
  });

  return (
    <Container>
      <Logo source={require('../../assets/image2.png')} />
      <TextTitle>Fluxo de Caixa</TextTitle>
    </Container>
  );
};
