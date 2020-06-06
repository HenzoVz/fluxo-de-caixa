import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const AreaSaldo = styled.View`
  padding-top: 30px;
  padding-bottom: 20px;
  background-color: #a303c3;
`;

export const Saldo =  styled.Text`
  text-align: center;
  color: #fff;
  font-size: 30px;
`;

export const ButtonArea = styled.View`
  flex: 1;
  align-items: flex-end;
  flex-direction: row;
  justify-content: space-around;
  background-color: #fff;
`;

export const AreaExit = styled.View`
  align-items: flex-end;
  flex-direction: row;
  justify-content: space-around;
  background-color: #fff;
`;

export const ButtonExit = styled.TouchableHighlight`
  width: 100%;
  height: 55px;
  align-items: center;
  justify-content: center;
  background-color: #a303c3;
`;

export const Button = styled.TouchableHighlight`
  height: 50px;
  width: 50%;
  align-items: center;
  justify-content: center;
  background-color: #a303c3;
`;

export const ButtonText = styled.Text`
  color: #fff;
  text-align: center;
  font-size: 22px;
`;
