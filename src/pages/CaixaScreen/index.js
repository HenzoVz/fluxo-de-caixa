import React, {useEffect, useState, useCallback} from 'react';
import {
  Text,
  FlatList,
  TouchableWithoutFeedback,
  Modal,
  ScrollView,
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
  ContainerItemns,
  Area,
  AreaGraph,
  TextHistorico,
  AreaHistorico,
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

  useEffect(() => {
    async function handleGetData() {
      const user = firebase.auth().currentUser;

      console.log(user?.uid);
      if (user) {
        await firebase
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
    }

    handleGetData();
    handleGetHistory();
  }, []);

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

      historico
        .child(key)
        .set({
          type: 'receita',
          valor: receita,
          date: getCurrentDate(),
        })
        .then(() => {
          handleGetHistory();
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

      historico
        .child(key)
        .set({
          type: 'despesa',
          valor: despesa,
          date: getCurrentDate(),
        })
        .then(() => {
          handleGetHistory();
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

  const handleGetHistory = useCallback(async () => {
    const user = firebase.auth().currentUser;
    await firebase
      .database()
      .ref('historico')
      .child(user.uid)
      .once('value', (snapshot) => {
        let auxHistorico = [];

        snapshot.forEach((childItem) => {
          auxHistorico.push({
            key: childItem.key,
            date: childItem.val().date,
            type: childItem.val().type,
            valor: childItem.val().valor,
          });
        });
        setHistorico(auxHistorico);
      });
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
        <Saldo>Saldo R$ {saldo.toFixed(2)}</Saldo>
      </AreaSaldo>
      <ContainerItemns>
        <ScrollView
          horizontal={true}
          contentContainerStyle={{width: `${200}%`}}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={200}
          decelerationRate="fast"
          pagingEnabled>
          <AreaGraph>
            <Text>.....</Text>
          </AreaGraph>
          <AreaHistorico>
            <FlatList
              data={historico}
              renderItem={({item, index}) => (
                <Area>
                  <TextHistorico>{item.date}</TextHistorico>
                  {item.type == 'receita' ? (
                    <TextHistorico style={{color: 'green'}}>
                      {item.type.toUpperCase()}
                    </TextHistorico>
                  ) : (
                    <TextHistorico style={{color: 'red'}}>
                      {item.type.toUpperCase()}
                    </TextHistorico>
                  )}
                  <TextHistorico>
                    R$ {parseFloat(item.valor).toFixed(2)}
                  </TextHistorico>
                </Area>
              )}
              keyExtractor={(item) => item.key}
            />
          </AreaHistorico>
        </ScrollView>
      </ContainerItemns>
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
