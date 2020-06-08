import React, {useEffect, useState} from 'react';
import {
  Text,
  Flatlist,
  TouchableWithoutFeedback,
  Modal,
  Platform,
} from 'react-native';
import {
  Container,
  AreaSaldo,
  Saldo,
  ButtonArea,
  Button,
  ButtonText,
  AreaExit,
  ButtonExit,
  Box,
  BoxBody,
  BoxTitle,
  BoxInput,
  BoxButton,
  BoxText,
} from './styles';
import {useNavigation} from '@react-navigation/native';
import firebase from '../../FirebaseConnection';

export default () => {
  const [saldo, setSaldo] = useState(0);
  const [historico, setHistorico] = useState([]);
  const [receita, setReceita] = useState('');
  const [despesa, setDespesa] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [monitor, setMonitor] = useState('');

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

  function handleClickReceita() {
    setModalVisible(true);
    setMonitor('receita');
  }

  function handleClickDespesa() {
    setModalVisible(true);
    setMonitor('despesa');
  }

  function getCurrentDate() {
    return new Date().toISOString().slice(0, 10);
  }

  function handleClickAddReceita() {
    if (receita != '') {
      let historico = firebase
        .database()
        .ref('historico')
        .child(firebase.auth().currentUser.uid);

      let user = firebase
        .database()
        .ref('users')
        .child(firebase.auth().currentUser.uid);

      let key = historico.push().key;

      historico.child(key).set({
        type: 'receita',
        valor: receita,
        date: getCurrentDate(),
      });

      user.once('value').then((snapshot) => {
        let auxSaldo = parseFloat(snapshot.val().saldo);
        auxSaldo += parseFloat(receita);

        user.set({
          saldo: auxSaldo,
        });

        setModalVisible(false);
      });
    }
  }

  function handleClickAddDespesa() {
    if (despesa != '') {
      let historico = firebase
        .database()
        .ref('historico')
        .child(firebase.auth().currentUser.uid);

      let user = firebase
        .database()
        .ref('users')
        .child(firebase.auth().currentUser.uid);

      let key = historico.push().key;

      historico.child(key).set({
        type: 'despesa',
        valor: despesa,
        date: getCurrentDate(),
      });

      user.once('value').then((snapshot) => {
        let auxSaldo = parseFloat(snapshot.val().saldo);
        auxSaldo -= parseFloat(despesa);

        user.set({
          saldo: auxSaldo,
        });

        setModalVisible(false);
      });
    }
  }

  useEffect(() => {
    return () => {
      handleClickReceita;
      handleClickDespesa;
    };
  }, []);

  return (
    <Container>
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}>
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <Box>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
              <BoxBody>
                {monitor == 'receita' ? (
                  <>
                    <BoxTitle>Valor da Receita</BoxTitle>
                    <BoxInput
                      placeholder="Receita em R$"
                      keyboardType="numeric"
                      onChangeText={(e) => setReceita(e)}
                      returnKeyType="next"
                    />
                    <BoxButton
                      underlayColor="#fff"
                      onPress={handleClickAddReceita}>
                      <BoxText>───── Adicionar ─────</BoxText>
                    </BoxButton>
                  </>
                ) : (
                  <>
                    <BoxTitle>Valor da Despesa</BoxTitle>
                    <BoxInput
                      placeholder="Despesa em R$"
                      keyboardType="numeric"
                      onChangeText={(e) => setDespesa(e)}
                      returnKeyType="next"
                    />
                    <BoxButton
                      underlayColor="#fff"
                      onPress={handleClickAddDespesa}>
                      <BoxText>───── Adicionar ─────</BoxText>
                    </BoxButton>
                  </>
                )}
              </BoxBody>
            </TouchableWithoutFeedback>
          </Box>
        </TouchableWithoutFeedback>
      </Modal>
      <AreaSaldo>
        <Saldo>Saldo R$ {saldo}</Saldo>
      </AreaSaldo>
      <ButtonArea>
        <Button onPress={handleClickReceita}>
          <ButtonText>Receita</ButtonText>
        </Button>
        <Button onPress={handleClickDespesa}>
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
