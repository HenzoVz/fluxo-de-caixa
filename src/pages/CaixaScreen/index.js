import React, {useEffect, useState} from 'react';
import {Flatlist} from 'react-native';
import {
  Container,
  AreaSaldo,
  Saldo,
  ButtonArea,
  Button,
  ButtonText,
  AreaExit,
  ButtonExit,
} from './styles';
import {useNavigation} from '@react-navigation/native';
import firebase from '../../FirebaseConnection';

export default () => {
  const [saldo, setSaldo] = useState(0);
  const [historico, setHistorico] = useState([]);
  const [receita, setReceita] = useState('');
  const [despesa, setDespesa] = useState('');

  const navigation = useNavigation();

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      firebase
        .database()
        .ref('users')
        .child(user.uid)
        .on('value', (snapshot) => {
          let auxSaldo = snapshot.val().saldo;
          setSaldo(auxSaldo);
        });
    } else {
      navigation.navigate('Home');
    }
  });

  return (
    <Container>
      <AreaSaldo>
        <Saldo>Saldo R$ {saldo}</Saldo>
      </AreaSaldo>
      <ButtonArea>
        <Button onPress={(e) => setReceita(e)}>
          <ButtonText>Receita</ButtonText>
        </Button>
        <Button onPress={(e) => setDespesa(e)}>
          <ButtonText>Despesa</ButtonText>
        </Button>
      </ButtonArea>
      <AreaExit>
        <ButtonExit onPress={() => firebase.auth().signOut()}>
          <ButtonText>Sair</ButtonText>
        </ButtonExit>
      </AreaExit>
    </Container>
  );
};
