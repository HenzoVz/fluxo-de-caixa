import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;

export const AreaSaldo = styled.View`
  width: 100%;
  padding-top: 30px;
  padding-bottom: 20px;
  background-color: #a303c3;
`;

export const Saldo = styled.Text`
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

export const Box = styled.View`
  flex: 1;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const BoxBody = styled.View`
  height: 45%;
  width: 85%;
  background-color: #fff;
  justify-content: center;
  align-items: center;
`;

export const BoxTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #a303c3;
`;

export const BoxInput = styled.TextInput`
  margin-top: 15px;
  background-color: #ccc;
  width: 50%;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

export const BoxButton = styled.TouchableHighlight`
  padding-top: 20px;
`;

export const BoxText = styled.Text`
  font-size: 15px;
  color: #a303c3;
`;

export const ContainerItemns = styled.View`
  flex: 10;
  background-color: #ccc;
`;

export const AreaGraph = styled.View`
  flex: 1;
  justify-content: center;
  background-color: #fff;
`;

export const AreaHistorico = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #fff;
`;

export const TextHistorico = styled.Text`
  font-size: 18px;
  text-align: center;
  align-items: center;
  justify-content: flex-start;
`;

export const Area = styled.View`
  padding: 4px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: #fff;
`;
