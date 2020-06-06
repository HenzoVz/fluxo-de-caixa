import React, {useState, useRef} from 'react';
import {
  Container,
  EmailInput,
  PasswordInput,
  Logo,
  ContainerLogo,
  AreaButton,
  Button,
  ButtonText,
} from './styles';
import {useNavigation} from '@react-navigation/native';
import firebase from '../../FirebaseConnection';

export default () => {
  const inputPasswordRef = useRef();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  firebase.auth().signOut();

  function cadastrar() {
    if (email != '' && password != '') {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          let uid = user.uid;
          firebase.database().ref('users').child(uid).set({
            saldo: 0,
          });

          navigation.navigate('Caixa');
        }
      });

      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .catch((error) => {
          alert(error.code);
        });
    }
  }

  return (
    <Container>
      <ContainerLogo>
        <Logo source={require('../../assets/image2.png')} />
      </ContainerLogo>
      <EmailInput
        placeholder="E-mail"
        keyboardType="email-address"
        returnKeyType="next"
        onChangeText={(e) => setEmail(e)}
        onSubmitEditing={() => inputPasswordRef.current.focus()}
      />
      <PasswordInput
        placeholder="Senha"
        secureTextEntry={true}
        ref={inputPasswordRef}
        onChangeText={(e) => setPassword(e)}
      />
      <AreaButton>
        <Button onPress={cadastrar}>
          <ButtonText>──────── Cadastrar ────────</ButtonText>
        </Button>
      </AreaButton>
    </Container>
  );
};
