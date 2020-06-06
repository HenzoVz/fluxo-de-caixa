import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

export const EmailInput = styled.TextInput`
  width: 350px;
  height: 40px;
  font-size: 18px;
  background-color: #eee;
  margin-top: 15px;
  border-radius: 10px;
  padding: 10px;
`;

export const PasswordInput = styled.TextInput`
  width: 350px;
  height: 40px;
  font-size: 18px;
  background-color: #eee;
  margin-top: 10px;
  border-radius: 10px;
`;

export const Logo = styled.Image`
  height: 100px;
  width: 100px;
  background-color: #fff;
`;

export const ContainerLogo = styled.View`
  padding-bottom: 50px;
  background-color: #fff;
`;

export const AreaButton = styled.View`
  padding-top: 10px;
`;

export const Button = styled.TouchableHighlight`
  border-radius: 50px
  padding: 10px;
  background-color: #fff;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: #a303c3;
`;
