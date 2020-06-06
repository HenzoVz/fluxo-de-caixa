import React from 'react';
import {
  Container,
  TextTitle,
  AreaButton,
  Button,
  ButtonText,
  Logo,
  ContainerLogo,
} from './styles';
import {useNavigation} from '@react-navigation/native';
export default () => {
  const navigation = useNavigation();

  function handleClickCadastro() {
    navigation.navigate('Cadastro');
  }
  function handleClickLogin() {
    navigation.navigate('Login');
  }

  return (
    <Container>
      <ContainerLogo>
        <Logo source={require('../../assets/image2.png')} />
        <TextTitle>Fluxo de Caixa</TextTitle>
      </ContainerLogo>
      <AreaButton>
        <Button underlayColor="#ccc" onPress={handleClickCadastro}>
          <ButtonText>Cadastrar</ButtonText>
        </Button>
        <Button underlayColor="#ccc" onPress={handleClickLogin}>
          <ButtonText>Login</ButtonText>
        </Button>
      </AreaButton>
    </Container>
  );
};
